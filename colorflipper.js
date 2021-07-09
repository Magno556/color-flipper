/*const hex=[ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color =document.querySelector(".color")
btn.addEventListener("click",function(){
    let hexColor="0";
    for(let i=0; i<6; i++){
        hexColor +=hex[getRandonNumber()];
    }
    color.textContent =hexColor;
    document.body.style.backgroundColor=hexColor;

});
function getRandonNumber(){
    returne Math.floor(math.random()*hex.length);
} */

const color = document.getElementById('btn');
textColor = document.getElementById('bc');
const body = document.body;

function randomColor(){
    return Math.floor(Math.random()*255);
}

color.addEventListener('click',bgColor)
function bgColor(){
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();
    const rgbString = `rgb(${color1}, ${color2}, ${color3})`

    body.style.background = rgbString;
    TextColor.innerText = rgbString;
}