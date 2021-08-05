const mssg = document.querySelector("p.error");
console.log(mssg.style); // All styles in camelCase

// Override the style
mssg.setAttribute("style", "margin: 5px 10px 15px 20px");

// add style
mssg.style.color = "red";
// javascript style-style as to be (camelCase)
mssg.style.fontSize = "30px";

const content = document.querySelector(".content");
content.style.fontSize = "50px";

