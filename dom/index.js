// get an element by css selector
const p = document.querySelector("p");
const content = document.querySelector(".content");

// get all elements by css selector
const ps = document.querySelectorAll("p");

/** Others way to get elements from the DOM ***********************/
// get an element by ID
const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const prs = document.getElementsByTagName("p");
console.log(prs);
console.log(prs[1]);
/** Others way to get elements from the DOM ***********************/

ps.forEach((p, i) => {
  console.log(p.innerText);
  p.innerText += ` (${i} - new text!)`;
});

content.innerHTML += "<h2>this is an h2 added to the content</h2>";

const people = ["Mario", "Luis", "John"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

// Get and Set attribute
const mssg = document.querySelector("p.error");
// Get
console.log(mssg.getAttribute("class"));
// Set
mssg.setAttribute("class", "success");

console.log(mssg.getAttribute("class"));
console.log("***********");
console.log(mssg);
console.log("***********");