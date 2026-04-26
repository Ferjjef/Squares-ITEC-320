let squareArea = document.querySelector("#squareArea)
// let SquareArea = document.getElementById('squareArea');
let squareCount =  parseInt(Math.random()* 21)+ 30;//30-50
let maxZ = 1;

for (let i = 0; i < squareCount;i++) {
  //make a square
  let square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random()*700)+"px";
  square.style.top = parseInt(Math.random()*300)+"px";
  //put it on the square
  squareArea.append(square);
}

//addsquare() method
function addSquare() {
  let square = document.createElement("div");
  square.className =  "square";

  // Randomzing square size
  let size = document.createElement("div");
  square.style.width = size + "px";
  square.style.width = size + "px";

  square.style.left = parseInt(Math.random() * 640) + "px";
  square.style.top
  square.style.backgroundColor = getRandomColor();
  square.style.zIndex = 0;
  
  //On-click behavior for squares
  square.addEventListener("click", function()){
    if (parseInt(square.style.zIndex) === maxZ)  {
      //Square already on top
      square.remove
    } else {
      //Bring square to front
      maxZ++;
      square.style.zIndex = maxZ;
    }
  
   });

   squareArea.append(square);
  }

function getRandomColor(){
  //Make color string
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters .charAt(parseInt(Math.random() * letters.length));
  }
  //Return color string
  return color;
}

//Changing all square colors
function changeColor() {
  //Make an array
  let allSqaures = document.querySelectorAll(".square"); 
  //For of loop 
  for (let square of allSquares) {
      square.style.backgroundColor = getRandomColor();
  }
}

//Wire up buttons
document.querySelector("#addBtn").addEventListener("click", addSquare);
document.querySelector("#colorBtn").addEventListener("click", changeColors);



}

                                        
