const circle = document.querySelector("#info");

circle.addEventListener('mouseenter',()=>{
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
})

circle.addEventListener('mouseleave',()=>{
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
})