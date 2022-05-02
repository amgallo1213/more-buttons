function sayHello(element){
    element.innerText = "Hello!";
}
function sayClick(element){
    element.innerText = "Click me!";
}

function over(element){
    element.style.backgroundColor = "rgb(233, 20, 190)";
    element.innerText = "Now I'm a pink circle!"
}
function out(element){
    element.style.backgroundColor = "rgb(15, 201, 198)";
    element.innerText = "I'm a circle!"
}
function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
    element.innerText = "Switch to light mode"
}
let likeOne = 1;
function addLike(){
    likeOne++
    document.getElementById ("like-btn").innerText = likeOne
}

