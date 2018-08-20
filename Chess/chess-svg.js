(function(window){
	const SVGNS = 'http://www.w3.org/2000/svg';
	const XLINKNS = 'http://www.w3.org/1999/xlink';
	var svg = document.getElementById('chessBoard');
	if (!svg) throw 'ChessBoard not found!';
	var D = chess.D, DIM = chess.DIM;
	svg.setAttribute('width', 700);
	svg.setAttribute('height', 700);
	svg.setAttribute('viewBox', `0 0 ${D} ${D}`);
	var bkg = createRect(0, 0, D, D, '#bbb', svg),
		gBoard = createElement('g', null, svg), 
		gLabels = createElement('g', null, svg),
		gPieces = createElement('g', null, svg);

	function applyAttributes(element, attrs) {
		if (!attrs) return;
		for(var n in attrs) {
			element.setAttribute(n, attrs[n]);
		}
	}

	function createElement(tag, attrs, addTo) {
		var elem = document.createElementNS(SVGNS, tag);
		applyAttributes(elem, attrs);
		if (addTo) addTo.appendChild(elem);
		return elem;
	}

	function createRect(x, y, w, h, fill, addTo) {
		var attrs = {
			x: x, y: y, width: w, height: h
		}
		if (fill) attrs.fill = fill;
		return createElement('rect', attrs, addTo);
	}

	function drawBoard() {
		for(var i=0;i<64;++i){
			var pos = chess.getSquarePosition(i);
			createRect(pos.x, pos.y, chess.DIM, chess.DIM, 
				pos.clr, gBoard);
		}
	}

	function drawLabels() {
		var x, y, name;
		function create() {
			createElement('text', 
				{x: x, y: y}, gLabels).textContent = name;
		}
		for(var f = 0;f<8;++f) {
			name = chess.fileName(f);
			x = (f + 1.5) * DIM;
			y = D - DIM / 2;
			create();
		}
		for(var r = 0;r< 8;++r) {
			name = chess.rankName(r);
			x = DIM / 2;
			y = D - 1.5 * DIM - r * DIM;
			create();
		}
	}

	drawBoard();
	drawLabels();
})(window);