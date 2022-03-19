// var n = prompt("Enter a number");
// //n, n->MediaKeyMessageEvent(*0.454), alert the kg, log conversion completed

// kg = n*0.454;

// alert("Kg Comversion: "+kg);

// console.log("Conversion complete");

// for(var x=0;x<5;x++){
//     console.log('hello')
// }

var name = prompt('Enter your full name');
var age = prompt('Enter your age');
var height = prompt('Enter your height');
var pet = prompt('Enter your pet\'s name');

var name_b,age_b,height_b,pet_b=false;

const arr = name.split(" ");

fname = arr[0];
lname = arr[1];

if(fname[0]==lname[0]){
    name_b=true;
}

if(age>20 && age<30){
    age_b=true;
}

if(height>=170){
    height_b=true;
}

if(pet[pet.length-1]=='y'){
    pet_b=true;
}

// console.log('SPY where are you'+name_b+age_b+height_b+pet_b)

if(name_b==true && age_b==true && height_b==true && pet_b==true ){
    console.log('SPY FOUND')
}
