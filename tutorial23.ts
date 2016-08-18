class Person{
    constructor(name){
        console.log(name + " Person constructor");
        
    }
    getID(){
        return 10;
    }
}

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor");
        
    }
    getID(){
        return super.getID();
    }
}

let e = new Employee("Chandler");
console.log(e.getID());
