function *createGenerator(){
  yield 1;
  console.log("After 1st yield");
  yield 2;
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());