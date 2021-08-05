const ul = document.querySelector("ul");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// https://developer.mozilla.org/en-US/docs/Web/Events
btn1.addEventListener("click", () => {
  btn1.textContent = "You clicked me!";
});

btn2.addEventListener("click", () => {
  ul.innerHTML += `<li>New Todo</li>`;
});

const items = document.querySelectorAll("li");
// Not a good practice attach the event to the elements -> use bubbling instead.
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);

    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

// Event bubbling and delegation
// ul is the parent of li tags
ul.addEventListener("click", (e) => {
  // console.log(e); //Path: event->target->tagName
  if ("LI" === e.target.tagName) {
    e.target.remove();
  }
});

/***    ***/
const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("OI! my content is copyrighted!!");
});
/***    ***/
/***    ***/
const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

// document.addEventListener('wheel', e => {
//   console.log(e.pageX, e.pageY);
// });
