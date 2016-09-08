 let mySet = new Set();
let ob1 = {};
let ob2 = {};

 mySet.add("Hello");
 mySet.add(1);
 mySet.add(ob1);
 mySet.add(ob2);
 console.log(mySet.size);

 let newSet = new Set([1,2,3,4,4,4]);
 console.log(newSet.size);

 let chainSet = new Set().add("hello").add("world");
 console.log(chainSet.size);

 console.log(newSet.delete(1));
 console.log(newSet.size);
 
 
 
 
 