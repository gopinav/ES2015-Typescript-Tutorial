
let myMap = new Map();

myMap.set("fname","Chandler");
myMap.set("age", 30);

console.log(myMap.get("fname"));

let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 20);

console.log(myMap.get(ob1));
myMap.delete("fname");
myMap.clear();

console.log(myMap.size);
console.log(myMap.has("fname"));


