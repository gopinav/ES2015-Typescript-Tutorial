export function greet(message){
    console.log(message);
};

export class GreetMessage{
    constructor(){
        console.log("Constructor");
    }
    greet(){
        console.log("Greet function");
    }
};