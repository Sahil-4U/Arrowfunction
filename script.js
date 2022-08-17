//Function expression
let myfun1=function show(a){
    console.log(a);
}
myfun1("Sahil");

//Anonymus Function expression--
let myfun2=function(b){
    console.log(b);
}
myfun2(13);

//Arrow Function:--
let myfun = a =>console.log(a);
myfun('kapil');

//Arrow function with default parameters:--
let myfun3 = (a,b=90) => console.log(a +" "+b);
myfun3(20,45);

//Arrow function with restparameters:-------
let mufun4 = (a,...args) => console.log(a+" "+args);
mufun4(10,20,30,40,50);

//Arrow function with return statement:--
let myfun4=a =>{return a};//it is necessary to put paranthesis with return statement 
console.log(myfun(10));

//Arrow function with two printinglines:--
let myfun5 =()=>{
    console.log('hi');
    console.log('world');
}
myfun5();