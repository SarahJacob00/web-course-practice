// var carInfo = {
//     make:"Maruti", 
//     year:1990, 
//     model:"Curry",
//     display : function(){
//         console.log('The method was called -'+ this.year)
//         return this.make;
//     }
// };

// alert(carInfo["make"]);
// console.log(carInfo);

// for(k in carInfo){
//     console.log('key : '+k);
//     console.log('value : '+carInfo[k]);
    
// }

// console.log('display :'+carInfo.display());

var employee = {
    name:"John Smith",
    job:"Prog",
    age:31,
    nameLength: function(){
        console.log("Length : "+this.name.length);
    },
    lastName : function(){
        const arr = this.name.split(" ");
        console.log('Last name : '+arr[1]);
    }
}

alert('Name - '+employee.name+' Job - '+employee.job+'Age - '+employee.age);
employee.nameLength();
employee.lastName();