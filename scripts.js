const etchArea = document.getElementById("etchArea");

//Player amount of squares selection variable.
//**Still no way for the player to decide on number of squares**

function drawEtchArea() {
  
    
  let playerProvidedSquares = prompt("Pick a Etch-A-Sketch density between 1 and 100")

  if (playerProvidedSquares > 100 || playerProvidedSquares < 1){
    playerProvidedSquares = prompt("Your number created an internal error, please pick a number between 1 and 100")
  }
  //Figure out how many squares will be used
  let numSquares = Math.pow(playerProvidedSquares, 2);

  //Adjust CSS grid to have appropriate amount of columns so etch box has the same amount of columns as rows
  etchArea.style.gridTemplateColumns = `repeat(${playerProvidedSquares}, 1fr)`;
  etchArea.style.gridTemplateRows = `repeat(${playerProvidedSquares}, 1fr)`;

  //Create grid element divs and append them to the etchArea
  for (let i = 0; i < numSquares; i++) {
    let newGridItem = document.createElement("div");
    newGridItem.classList.add("gridElement");
    etchArea.appendChild(newGridItem);
  }

  draw();
  
}

//Select all grid elements and add a mouseover event to them that changes their CSS class
function draw (){
const gridElement = document.querySelectorAll(".gridElement");
gridElement.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = document.getElementById("pickColor").value;
  });
});
};

drawEtchArea();

//New Density Button
const densityBtn = document.getElementById("newDensityBtn");
densityBtn.addEventListener("click", clearOut)
densityBtn.addEventListener("click", drawEtchArea)
//Clear Button
const clearBtn = document.getElementById("clearBtn");
function clearOut() {
    const gridElement = document.querySelectorAll(".gridElement");
    gridElement.forEach((element) => (element.style.backgroundColor = "white"));
}
clearBtn.addEventListener("click", clearOut);
