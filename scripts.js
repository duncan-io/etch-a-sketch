
const etchArea = document.getElementById("etchArea");

//Player amount of squares selection variable. Still no way for the player to decide on number of squares
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


//Select all grid elements and add a mouseover event to them that changes their CSS class

document.querySelectorAll(".gridElement").forEach(item => {item.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "black"})})




