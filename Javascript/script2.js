// conditional flow
// control flow
var age=20;
if(age<18){
    console.log("you are not eligible")
}else
{
    console.log("you are eligible")
}

var age=15;
if(age < 18 && age > 35){
    console.log("you are eligible!!")
}else{
    console.log("you are not eligible!!")
}

var age=55;
if(age<=18 && age<50){
    console.log("you are eligible!!")
}else if(age>49 && age<61){
    console.log("ohh Mr.50's Vanakkam!")
}
else{
    console.log("you are not eligible!!")
}

var age=50;
if(age>=18 && age<60){
if(age>=50){
    console.log("ohh Mr.50's Vanakkam!*!")
}
}
else{
    console.log("you are not eligible!*!")
}

switch ("monday"){
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wednesday":
        console.log("today is wednesday")
        break;
    case "thursday":
        console.log("today is thursday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
    default :
        console.log("you are not on the correct day")
        break;
}
mark=15
switch(true){
    case mark>=15:
        console.log("Good!!")
        break;
    case mark<=10:
        console.log("Failed!!")
}

// looping
// for statement
for (let j=9;j<=15;j++){
    console.log(j);
}
for (let j=2;j<20;j++){
    if(j%2==0)
    console.log(j);
}
for (let j=2;j<=20;j=j+2){
    if(j%2==0)
    console.log(j);
}
// we could use two for for loop in the coding for printing pattern purpose
let up="";
for( let a=0;a<5;a++){
    for (let b=0;b<5;b++){
        up=up+ "^"
    }
    console.log(up)
    up="";
}
// while statement
var on=true;
var count=1;

while(on){
    console.log(":)");
    if(count==3){
        on=false;
    }
    count++;
}
// do 
var under=false;
do{
    console.log(":(");
}while(under)

// break

var on =true;
var count =1;
while(on){
    console.log(":):");
    
    if(count==9){
        break;
    }
    count++;
}
// continue

var on =true;
var count =1;
while(on){
    console.log(":):");
    console.log(count);
    if(count==9){
        continue;
    }
    count++;
}