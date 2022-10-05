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
            tile.addEventListener('click', setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if(gameOver){
        return;
    }

    let cords = this.id.split('-');
    let r = parseInt(cords[0]);
    let c = parseInt(cords[1]);

    board[r][c] = currPlayer;
    let tile = this;
    if(currPlayer == playerRed){
        tile.classList.add('red-piece');
        currPlayer = playerYellow;
    } else {
        tile.classList.add('yellow-piece');
        currPlayer = playerRed;
    }
}