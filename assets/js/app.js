var cl=console.log;


var clock =document.getElementById("clock");


function digitalclock(){

var date= new Date();
var hours =date.getHours();
var minits=date.getMinutes();
var second=date.getSeconds();
var session ="am";


if(hours > 12){
    session="pm";
    hours = hours -12;

}

hours=smallerthan10(hours);
minits=smallerthan10(minits);
second=smallerthan10(second);


function smallerthan10(v){
    if(v < 10){
         v= "0"+v;
        
    }
        return v;

}

// if(hours < 10){
//     hours ="0" + hours;
// }
// if(minits < 10){
//     minits = "0" + minits
// }
// if(second < 10){
//     second= "0" + second;
// }


var result=`${hours}       : ${minits} :  ${second}  ${session} `;

cl(result);
clock.innerText=result;

setTimeout(digitalclock, 1000);

}
digitalclock();








