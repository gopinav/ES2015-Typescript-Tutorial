function greetPerson(name){
     let greet;
    if(name === "Chandler"){
       let greet = "Hello Chandler";
    }else{
      let  greet = "Hi there";
    }
    console.log(greet);
   
}
greetPerson("Chandler");

var a=1;
var b=2;
if(a === 1){
    var a=10;
    let b = 20;
    console.log(a); //10
    console.log(b); //20
}
console.log(a); //10
console.log(b); //2

var c=1;
var c=2;

let d=1;
//let d=2;