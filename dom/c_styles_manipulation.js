const mssg = document.querySelector("p.error");
console.log(mssg.style); // All styles in camelCase

// Override the style
mssg.setAttribute("style", "margin: 5px 10px 15px 20px");

// add style
// javascript style (camelCase)
mssg.style.fontSize = "30px";

const content = document.querySelector(".content");
content.style.fontSize = "1.5em";
content.style.margin = "20px 20px";

/** Add| Remove| Toggle classes *****************************************/
const container = document.querySelector(".container");
console.log(container.classList);
// container.classList.add('error');
// container.classList.remove('error');

const pInContainer = document.querySelectorAll("div.container > p");
pInContainer.forEach((p) => {
  //innerText don't work with hidden elements
  if (p.innerText.includes("error")) {
    p.classList.add("error");
  }
  //textContent work with hidden elements also
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

// Toggle classes
const title = document.querySelector(".title");
title.classList.toggle("test"); // first time: gives the class 'test'
title.classList.toggle("test"); // Second time: removes the class 'test'
