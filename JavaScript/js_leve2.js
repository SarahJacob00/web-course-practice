function formal(name="sam"){
    console.log(name)
}

formal();


function sleep(weekend,weekday){

    return(!weekday||weekend)
    if (weekend==true){
        console.log('It is a weekend');
    }
    if (weekday==true){
        console.log('It is a weekend');
    }
}

var res = sleep(true,false);
console.log(res);

function monkey(A,B){
    return ((A && B)||(!A && !B));
}

var res = monkey(true,false);
console.log(res);

function repeat(str,n){
    res="";
    while(n!=0){
        res=res+str;n--;
    }
    
    return(res);
}

var res = repeat('sarah',5);
console.log(res);

function lucky(n=[2,4,5,13,1]){
    var res=0;
    for (var i =0;i<n.length;i++){
        // console.log(n[i]);
        if(n[i]==13){
            break;
        }
        res+=n[i];
    }
    console.log(res);
}

lucky();

function speeding(speed,bday){
    if(speed<=60){
        console.log('Good driving!')
    }
    else if(speed>60 && !bday){
        console.log('YOU ARE GETTING A SPEEDING TICKET!')
    }
    else{
        console.log('....be careful. And HAPPY BIRTHDAY')
    }
}

speeding(50,false);

function makeB(small, big, goal){
    return goal%5 >=0 && goal%5 -small<=0 && small+ 5*big>= goal;
}
