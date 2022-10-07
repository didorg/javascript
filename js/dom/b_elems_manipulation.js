// get all elements by css selector
const ps = document.querySelectorAll("p");
ps.forEach((p, i) => {
  console.log(p.innerText);
  p.innerText += ` (${i} - new text!)`;
});

const content = document.querySelector(".content");
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
