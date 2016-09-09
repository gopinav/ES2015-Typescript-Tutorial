let myMap = new WeakMap();
let ob1 = {};
myMap.set(ob1,"Hello World");
console.log(myMap.get(ob1));
ob1 = null;