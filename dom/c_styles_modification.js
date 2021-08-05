const mssg = document.querySelector("p.error");
console.log(mssg.style); // All styles in camelCase

// Override the style
mssg.setAttribute("style", "margin: 5px 10px 15px 20px");

// add style
// javascript style (camelCase)
mssg.style.fontSize = "30px";

const content = document.querySelector(".content");
content.style.fontSize = "1.5em";
content.style.margin = '20px 20px';

/** add and remove classes *****************************************/
const container = document.querySelector('.container');
console.log(container.classList);
// container.classList.add('error');
// container.classList.remove('error');

const pInContainer = document.querySelectorAll('div.container > p');
pInContainer.forEach(p=>{
    if(p.innerText.includes('error')){ //innerText don't work with hidden elements
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){ //textContent work with hidden elements also
        p.classList.add('success');
    }
})
/** add and remove classes *****************************************/