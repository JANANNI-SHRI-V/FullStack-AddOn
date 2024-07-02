//array 

let fullname="JananniShri";

let mark=[90,99,[88,77,[45,56,76,[55,99,[20,10]]]]];
console.log(mark[2][2][3][2][1]);

//object

let markobj={
    tamil: 23,
    english: 78,
    math:45
}
console.log(markobj.math);

// functions

function functionname(){
 console.log("playing");
}
functionname();

let j=10;
function func(){
    --j;
}
func();
console.log(j);

function add(a,b){
    return a+b;
}
console.log(add(9,9));

function sub(a,b){
    return a-b;
}
console.log(sub(9,9));

function mul(a,b){
    return a*b;
}
console.log(mul(9,9));

function div(a,b){
    return a/b;
}
console.log(div(9,9));

function mod(a,b){
    return a%b;
}
console.log(mod(9,9));

// function laaaaaaaaaa separator


function add(...numbers){                        // separator or spreed operator  
    let total=0;                     
    for(let i=0;i<numbers.length;i++){          // numbers.length is to check the length or count of elements in "numbers"
        total += numbers[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));




// pallindrome   (string )
// armstrong      (loop)
// finding vowels   (string)
// random number generator  (math)
// band name generator     (concatenate)
// number guessing game        (sir will tell us)
// finding highest number in array       
// finding lowest number in array       
// swap two strings using only two variables