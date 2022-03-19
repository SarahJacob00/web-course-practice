const student=[];
quit=true;
while(quit){
    var choice = prompt("Enter one of the following : add / remove / display / quit");
    switch(choice){
        case 'add': {
                    var name1 = prompt('Enter new student name : ');
                    student.push(name1);
                    break;
                }
        case 'remove': {
                    var name1 = prompt('Enter new student name : ');
                    const ind = student.indexOf(name1);
                    student.splice(ind,1);
                    break;
                }
        case 'display': {
                   alert(student);
                    break;
                }
        case 'quit':
            {
                console.log('BYEE')
                quit=false;
                break;
            }
        default:{
                alert('Enter a vaild value');
        }
    }
}
