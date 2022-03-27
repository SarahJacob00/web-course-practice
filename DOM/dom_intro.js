var header = document.querySelector("h1");

// alert(document.URL);

function randomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeHeaderColor(){
    colorIn = randomColor();
    header.style.color = colorIn;
}



setInterval("changeHeaderColor()",500);

header.textContent="How are you?";
header.innerHTML="<strong>whyyyyyy</strong>";

var bo = document.querySelector("body");
var a_link = bo.querySelector("a")

alert(a_link.getAttribute("href"))

a_link.setAttribute("href","https://kdramaclicks.com/")

