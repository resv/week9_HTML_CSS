(function(window){

    var D = 1000, DIM = (D - 200) / 8);
    var cvs = document.getElementById('chessBoard');
    if (!cvs) throw 'ChessBoard not found!';
    cvs.width = D;
    cvs.height = D;
    var ctx = cvs.getContext('2d');

    function getSquaredPosition(nSq){
        var file = nSq % 8, rank = Math.floor(nSq / 8 );
        var x = DIM + (file * DIM),
        y = D - DIM - (rank * DIM);
        var clr = (((file+rank) % 2) == 0 ) ? '#000' : '#fff';

    //   if(( file %2)) == 0) {
    //       clr = ((rank %2 ) == 0) ? '#000' : '#fff';
    //   } else {
    //       clr = ((rank %2 ) == 0) ? '#fff' : '#000';
    //   }
      return {
          x : x, y: y, rank: rank, file: file, clr: clr
      }
    }

    function drawBoard(){
    ctx.fillStyle = '#bbb';
    ctx.fillRect(0,0,D,D);
        for (var i = 0; i < 64; ++i){
        var pos = getSquarePostition(i);
        ctx.fillStyle = pos.clr;
        ctx.fillRect(pos.x,pos.y, DIM,DIM);
        }

    }
    drawBoard();
})(window);