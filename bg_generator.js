let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

const setGradient = () => {
  let css = document.querySelector("h3");
  let body = document.querySelector("body");
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.innerHTML = body.style.background + "";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const generateRandomColor = () =>{
let randomRed1 = Math.floor(Math.random() * 255 + 1);
let randomGreen1 = Math.floor(Math.random() * 255 + 1);
let randomBlue1 = Math.floor(Math.random() * 255 + 1);

let randomRed2 = Math.floor(Math.random() * 255 + 1);
let randomGreen2 = Math.floor(Math.random() * 255 + 1);
let randomBlue2 = Math.floor(Math.random() * 255 + 1);

let randomColor1 = `#${randomRed1.toString(16)}${randomGreen1.toString(16)}${randomBlue1.toString(16)}`;
let randomColor2 = `#${randomRed2.toString(16)}${randomGreen2.toString(16)}${randomBlue2.toString(16)}`;


let body = document.querySelector("body");
body.style.background =
  "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
color1.value = randomColor1;
color2.value = randomColor2;
let css = document.querySelector("h3");
css.textContent = body.style.background + "";

console.log(randomColor1);
console.log(randomColor2);
}


const clip = () => {
    const copyText = document.querySelector(".color-text-code");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}