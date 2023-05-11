/*********************************************DOM CREATION************************************************************** */
//Creates elements to populate the DOM
const body = document.querySelector("body");
body.style.margin = 0;
body.style.height = "100%";

//Used for title of the project
const header = document.createElement("div");
header.classList.add("header");
header.setAttribute("style", "display: grid; background-color: #121212; border-bottom: 1px solid grey");
body.appendChild(header);

const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
title.setAttribute("style", "font-family: 'Crimson Text', serif; text-align: center; color: white");
header.appendChild(title);

//Container stores leftMenu and rightSide

const container = document.createElement("div");
container.classList.add("container");
container.setAttribute("style", "display: grid; grid-template-columns: 1.5fr 5fr;");
body.appendChild(container);

let leftMenu = document.createElement("div");
leftMenu.classList.add("leftMenu");
leftMenu.setAttribute("style", "display: flex; flex-direction: column; gap: 3rem;background: linear-gradient(to left, #33ccff 0%, #ff99cc 100%); height: 91vh;border-right: 1px solid grey;");
container.appendChild(leftMenu);

//Form for sizes

let sizeOptions = document.createElement("div");
sizeOptions.classList.add("sizeOptions");
sizeOptions.style.border = "1px solid grey";
leftMenu.appendChild(sizeOptions);

let form = document.createElement("form");
sizeOptions.appendChild(form);
sizeOptions.setAttribute("style","display:flex; flex-direction: column; align-items: center; margin-top: 1rem; gap:0.5rem; size: 0.5rem; border: 1px solid black;")

let labelSelect = document.createElement("label");
labelSelect.setAttribute("for", "select");
labelSelect.setAttribute("style", "color: white; margin-right: 1rem; margin-left: 1rem;")
labelSelect.innerText = "Choose a size";
sizeOptions.appendChild(labelSelect);

let select = document.createElement("select");
select.classList.add("select");
select.setAttribute("name", "select");
sizeOptions.appendChild(select);

let subgroup1 = document.createElement("optgroup");
subgroup1.setAttribute("label", "Big");
select.appendChild(subgroup1);

let option1 = document.createElement("option");
option1.setAttribute("value", "16");
option1.innerText = "16 x 16";
select.appendChild(option1);

let subgroup2 = document.createElement("optgroup");
subgroup2.setAttribute("label", "Medium");
select.appendChild(subgroup2);

let option2 = document.createElement("option");
option2.setAttribute("value", "32");
option2.innerText = "32 x 32";
select.appendChild(option2);

let subgroup3 = document.createElement("optgroup");
subgroup3.setAttribute("label", "Small");
select.appendChild(subgroup3);

let option3 = document.createElement("option");
option3.setAttribute("value", "64");
option3.innerText = "64 x 64";
select.appendChild(option3);

let submit = document.createElement("input");
submit.classList.add("submit");
submit.setAttribute("type","submit");
submit.setAttribute("value","Let's go!");
submit.addEventListener("click",squareMaker);
sizeOptions.appendChild(submit);


//This part is for the actual drawing board

let rightSide = document.createElement("div");
rightSide.classList.add("rightSide");
rightSide.setAttribute("style", "background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); height: 91vh; display: flex; justify-content: center; overflow: hidden;");
container.appendChild(rightSide);

let sketch = document.createElement("div");
sketch.classList.add("sketch");
sketch.setAttribute("style", `align-self: center; background-color: white; height: 50rem; width: 50rem; display:grid; 
grid-template-columns: repeat(16, 1fr);  grid-template-rows: repeat(16, 1fr);`);

rightSide.appendChild(sketch);

/*********************************************Scripting!************************************************************** */

//Choose which color you want to use
let inputColor = document.createElement("input");
inputColor.setAttribute("type","color");
inputColor.setAttribute("style","align-self: center; margin: 1rem; border:");
leftMenu.appendChild(inputColor);
let chosenColor;

let someText = document.createElement("h3");
someText.innerHTML = "This was made by <a href='https://github.com/JavierDev98/' target=_blank>JavierDev98</a>"
someText.setAttribute("style","align-self: center; margin-top: 35rem;");
leftMenu.appendChild(someText);



function squareMaker() {
    sketch.innerHTML = ""; // Every time this line is run, it deletes the whole HTML inside the sketch div.
    let chosenSize = parseInt(document.querySelector("body > div.container > div.leftMenu > div > select").value);

    for (let i = 0; i < chosenSize * chosenSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.border = "1px solid black";
        square.addEventListener("click",drawSquares);
        sketch.appendChild(square);
        
    }
    sketch.setAttribute("style", `align-self: center; background-color: white; height: 50rem; width: 50rem; display:grid; 
      grid-template-columns: repeat(${chosenSize}, 1fr);  grid-template-rows: repeat(${chosenSize}, 1fr);`);
      
}

function drawSquares(square) {
  chosenColor = inputColor.value;
  this.setAttribute("style",`border: 1px solid black; background-color:${chosenColor}`);
  checkWhetherBlank(square);
}






