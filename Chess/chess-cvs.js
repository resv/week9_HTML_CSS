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
			for(var file = 0;file<8;++file) {
				var x = (1.5 + file) * DIM,
					y = D - (DIM / 2);
				ctx.fillText(files.charAt(file), x, y);
			}
			for(var rank = 0; rank<8;++rank) {
				var x = DIM / 2, y = (1.5 + rank) * DIM;
				ctx.fillText(ranks.charAt(rank), x,y);
			}
		}

		drawBoard();
		drawLabels();
})(window);