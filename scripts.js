
const etchArea = document.getElementById("etchArea");

//Player amount of squares selection variable. 
//**Still no way for the player to decide on number of squares**
let playerProvidedSquares = document.getElementById("densityInputId").value
//Figure out how many squares will be used
let numSquares = Math.pow(playerProvidedSquares, 2);

//Adjust CSS grid to have appropriate amount of columns so etch box has the same amount of columns as rows
etchArea.style.gridTemplateColumns = `repeat(${playerProvidedSquares}, 1fr)`
etchArea.style.gridTemplateRows = `repeat(${playerProvidedSquares}, 1fr)`

//Create grid element divs and append them to the etchArea
for (let i=0; i < numSquares; i++){
let newGridItem = document.createElement("div");
newGridItem.classList.add("gridElement");
etchArea.appendChild(newGridItem);
}


//Select all grid elements and add a mouseover event to them that changes their CSS class
const gridElement = document.querySelectorAll(".gridElement")
gridElement.forEach(element => {element.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "black"})});


//Clear Button
const clearBtn = document.getElementById("clearBtn");
function clearOut () {
    gridElement.forEach(element => element.style.backgroundColor="white")
}
clearBtn.addEventListener("click", clearOut)


