const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const buton = document.getElementById("colorButon");
const span = document.getElementById("colorSpan");
const body = document.getElementById("body");



buton.addEventListener("click", changeColor);

function randomHexChar(){

    return hex[Math.floor(Math.random()*16)];
}

function changeColor () {
    let hexColor ="#";
    for(i=0; i<6; i++)
    {
        hexColor += randomHexChar();
    }

    span.innerHTML = hexColor;
    body.style.backgroundColor = hexColor;  
    
}