var one = document.querySelectorAll("td");
var restart = document.querySelector("#restart")

function clearBoard(){
    for(var i = 0;i< one.length ;i++){
        one[i].textContent=" ";
    }
}

restart.addEventListener('click',clearBoard);

function checkMark(){
    if(this.textContent==" "){
        this.addEventListener('click',function(){
            this.textContent="X";
            this.style.color = "red";
        })
                
        this.addEventListener('dblclick',function(){
            this.textContent="O";
            this.style.color = "green";
        })
    }
   
        
    

}

function checkBoard(){
    for(var i = 0;i< one.length ;i++){
        one[i].addEventListener('click',checkMark);
    }
    
}

setInterval("checkBoard()",50);

