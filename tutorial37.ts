/*
for..of --> iterator metthod --> symbol.iterator*/

let str = "Hello";
let arr= [1,2,3];
let num =5;
let obj = {name:"Chandler"};

console.log("For string -" + typeof str[Symbol.iterator]);
console.log("For array -" + typeof arr[Symbol.iterator]);
console.log("For number -" + typeof num[Symbol.iterator]);
console.log("For object -" + typeof obj[Symbol.iterator]);