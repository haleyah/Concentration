    let content = [    'images/one.jpg','images/one.jpg','images/two.jpg','images/two.jpg',
                        'images/three.jpg','images/three.jpg','images/four.jpeg','images/four.jpeg',
                        'images/five.jpeg','images/five.jpeg','images/six.jpg','images/six.jpg',
                        'images/seven.jpeg','images/seven.jpeg','images/eight.jpg','images/eight.jpg'];
    let grid = [];
    let tilesFlipped = [];
    let flipped = 0


    

function init(){
    

    function makeGameBoard(){
        
        for(let i = 0; i < content.length; i++){

            let flipTile = document.createElement("div")
            let frontTile = document.createElement("div")
            let backTile = document.createElement("div")
            let img = document.createElement("img")
            let gameArea =  document.getElementById("gameArea")

            flipTile.className = 'flip'
            frontTile.className = "front"
            backTile.className = 'back'
            frontTile.id = "frontTile" + [i]
            backTile.id = "backTile" + [i]

            gameArea.appendChild(flipTile)
            flipTile.appendChild(frontTile)
            flipTile.appendChild(backTile)
            backTile.appendChild(img)
            document.getElementsByTagName("img")[i].src = content[i]
            frontTile.onclick = function(){
                let el = frontTile
                let el2 = backTile   

                flip(el, el2, content[i]);
            }
        }

        function flip(el1,el2,content){
            el1.style.transform ="perspective(600px) rotateY(-180deg)"
            el2.style.transform ="perspective(600px) rotateY(0deg)"
            flipped +=1
            tilesFlipped.push(content)
        }
        
    }
        makeGameBoard();

        
 
 

}
window.onload = init();
