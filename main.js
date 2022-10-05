var playerRed = "R";
var playerYellow = "Y";

var currPlayer = playerRed;

var gameOver  = false;
var board;

var rows = 6;
var coloumns = 7;

window.onload = function(){
    setGame();
}


function setGame(){
    board = [];

    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < coloumns; c++){
            row.push(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}
