
const etchArea = document.getElementById("etchArea");


let playerProvidedSquares = 16
//Figure out how many squares will be used
let numSquares = Math.pow(playerProvidedSquares, 2);

//Append appropriate amount of squares so etch box has the right amount
etchArea.style.cssText=`grid-template-columns:repeat(${playerProvidedSquares},100px)`

//Create divs and append them to the etchArea
for (let i=0; i < numSquares; i++){

let newGridItem = document.createElement("div");
newGridItem.classList.add("gridElement");
newGridItem.textContent = i;
etchArea.appendChild(newGridItem);

}






