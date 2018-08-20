(function(window) {

		var D = 1000, DIM = (D - 200) / 8;
		function getSquarePosition(nSq) {
			var file = nSq % 8, rank = Math.floor(nSq / 8);
			var x = DIM + (file * DIM),
				y = D - 2 * DIM - (rank * DIM);
			var clr = (((file+rank) % 2) == 0) ? '#000' : '#fff';
			return {
				x: x, y: y, rank: rank, file: file, clr: clr
			}
		}

		var ranks = '12345678', files = 'ABCDEFGH';
		window.chess = {
			D: D,
			DIM: DIM,
			getSquarePosition: getSquarePosition,
			fileName: (nFile) => files.charAt(nFile),
			rankName: (nRank) => ranks.charAt(nRank)
		}


})(window);