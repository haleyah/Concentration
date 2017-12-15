
let board = new array




//create game object
/*let game ={
    gameBoard : [   [0,0,1,1],
                    [2,2,3,3],
                    [4,4,5,5],
                    [6,6,7,7]   ],
    flipped: 0,

}



//create function to generate game board using gameBoard array
function makeGameBoard(){

    //get container div
    let gameArea = document.getElementById("container");
    //create table 
    let board = document.createElement("table");
        board.id = "board"
        //add rows to table
        for (i = 0; i < game.gameBoard.length; i++) {
            //create tr elements
            let row = document.createElement('tr');
            //add cells to rows
            for ( j = 0; j < game.gameBoard[i].length; j++) {
                //crete td elements
                let cell = document.createElement('td');
                //cell.id = gameBoard[i][j]
                console.log(document.getElementById("board").getElementsByTagName("td");)
                //set cell contents to contents of array
                cell.textContent = game.gameBoard[i][j];

                //add cells to rows
                row.appendChild(cell);
            }
            //add rows to table
            board.appendChild(row);
        }
        //add table to container element
          gameArea.appendChild(board);
        
    }
    makeGameBoard();

   
 




// add click event to each cell
function addOnClick(){
   let cell = document.getElementById("board").getElementsByTagName("td");

   for(let i = 0; i < cell.length; i++){

        cell[i].onclick = function(){
           document.getElementById("board").getElementsByTagName("td")[i].style.visibility = "hidden";
           
           // cell.style.backgroundColor = "red"
            (console.log(document.getElementById("board").getElementsByTagName("td")[i]))
          //  document.getElementById("i").style.backgroundColor = "red"
            game.flipped ++

          //  console.log(game.flipped)
   
        }
    }
};



addOnClick();

function flip(){


}
*/