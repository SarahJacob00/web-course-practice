player1 = prompt('Enter Player 1 name');
player2 = prompt('Enter Player 2 name');

won=false;

const colors=['red','blue']
var player = 1;
var table = $('table tr');



function check(row, col, color){
    $('button').click(function(){
        // alert('HIIII');
        $(this).css('background-color',colors[player-1]);
        if(player===1){
            player++;
       }
        else{
            player--;
        }
    
})
}



function Win(row,col){
    console.log('You won');
}
