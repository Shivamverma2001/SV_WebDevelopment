const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("You clicked me!");
    console.log("I hope it worked!!");
}
function scream() {
    console.log("AHHHHHHHHHHH!!");
    console.log("Stop clicking me");
}
btn.onmouseenter = scream;
document.querySelector('h1').onclick = function () {
    alert('you clicked the h1');
}

//V3
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('clicked');
})

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}
const tasbtn = document.querySelector("#tas");
tasbtn.addEventListener('click', twist);
tasbtn.addEventListener('click', shout);