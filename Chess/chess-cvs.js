(function(window) {

		var D = 1000, DIM = (D - 200) / 8;
		var cvs = document.getElementById('chessBoard');
		if (!cvs) throw 'ChessBoard not found!';
		cvs.width = D;
		cvs.height = D;
		var ctx = cvs.getContext('2d');

		function getSquarePosition(nSq) {
			var file = nSq % 8, rank = Math.floor(nSq / 8);
			var x = DIM + (file * DIM),
				y = D - 2 * DIM - (rank * DIM);
			var clr = (((file+rank) % 2) == 0) ? '#000' : '#fff';
			return {
				x: x, y: y, rank: rank, file: file, clr: clr
			}
		}

		function drawBoard() {
			ctx.fillStyle = '#bbb';
			ctx.fillRect(0,0,D,D);
			for(var i=0;i<64;++i) {
				var pos = getSquarePosition(i);
				ctx.fillStyle = pos.clr;
				ctx.fillRect(pos.x, pos.y, DIM, DIM);
			}
		}

		var ranks = '12345678', files = 'ABCDEFGH';
		function drawLabels() {
			ctx.fillStyle = '#000';
			ctx.font = '36px serif';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			for(var file = 0;file<8;++file) {
				var x = (1.5 + file) * DIM,
					y = D - (DIM / 2);
				ctx.fillText(files.charAt(file), x, y);
			}
			for(var rank = 0; rank<8;++rank) {
				var x = DIM / 2, y = (1.5 + (7 - rank)) * DIM;
				ctx.fillText(ranks.charAt(rank), x,y);
			}
		}

		function placePiece(pieceName, nSq, nSq2) {
			var img = new Image();
			img.addEventListener('load', () => {
				var pos = getSquarePosition(nSq);
				ctx.drawImage(img, pos.x + 32, pos.y + 25, 36, 50);
				if (nSq2 != undefined){
					pos = getSquarePosition(nSq2);
					ctx.drawImage(img, pos.x + 32, pos.y + 25, 36, 50);
				} 
			});
			img.src = `Pieces/${pieceName}.png`;
		}

		function resetPieces() {
			placePiece('WhiteRook', 0, 7);
			placePiece('WhiteKnight', 1, 6);
			placePiece('WhiteBishop', 2, 5);
			placePiece('WhiteQueen',3);
			placePiece('WhiteKing', 4);
			for(var i=0;i<8;++i) placePiece('WhitePawn', 8 + i);
			placePiece('BlackRook', 56, 63);
			placePiece('BlackKnight', 57, 62);
			placePiece('BlackBishop', 58, 61);
			placePiece('BlackQueen', 59);
			placePiece('BlackKing', 60);
			for(var i=0;i<8;++i) placePiece('BlackPawn', 48 + i);
		}

		drawBoard();
		drawLabels();
		resetPieces();
})(window);