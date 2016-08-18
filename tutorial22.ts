class Person{
   constructor(name){
       this.name = name;
       console.log(this.name + " Constructor");
       
   }
   static staticMethod(){
       console.log("Static Method");
       
   }
   greetPerson(){
       console.log("Hello " + this.name);
       
   }
}
let p = new Person("Chandler");
Person.staticMethod();
p.greetPerson();





