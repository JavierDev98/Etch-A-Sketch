//Creates elements to populate the DOM
let body = document.querySelector("body");
body.style.margin = 0;
body.style.height = "100%";

let header = document.createElement("div");
header.classList.add("header");
header.setAttribute("style","display: grid; background-color: #2C74B3; border-bottom: 2px solid #1E212D"); 
body.appendChild(header);

let title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
title.setAttribute("style","font-family: 'Crimson Text', serif; text-align: center;");
header.appendChild(title);

let container = document.createElement("div");
container.classList.add("container");
container.setAttribute("style","display: grid; grid-template-columns: 1.5fr 5fr;");
body.appendChild(container);

let leftMenu = document.createElement("div");
leftMenu.classList.add("leftMenu");
leftMenu.setAttribute("style","background-color: #205295; height: 53.7rem;border-right: 2px solid #1E212D;");
container.appendChild(leftMenu);

let sketch = document.createElement("div");
sketch.classList.add("sketch");
sketch.setAttribute("style","background-color: #0A2647; height: 53.7rem;");
container.appendChild(sketch);
