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
