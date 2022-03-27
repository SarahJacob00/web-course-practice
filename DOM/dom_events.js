var headOne = document.querySelector("#one");
var headTwo = document.querySelector("#two");
var headThree = document.querySelector("#three");

headOne.addEventListener('mouseover',function(){
    headOne.textContent="Mouse is hovering over";
    headOne.style.color = "green";
})

headOne.addEventListener('mouseout',function(){
    headOne.textContent="HOVER OVER";
    headOne.style.color = "black";
})

headTwo.addEventListener('click',function(){
    headTwo.textContent="Being clicked";
    headTwo.style.color = "red";
})

headThree.addEventListener('dblclick',function(){
    headThree.textContent="Being double clicked";
    headThree.style.color = "blue";
})