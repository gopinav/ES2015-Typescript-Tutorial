let person = {
    fname: "Chandler",
    lname: "Bing"
};

person[Symbol.iterator] = function(){
let properties = Object.keys(person);
let count = 0;
let isDone = false;
let next = () => {
    if(count>=properties.length){
        isDone = true;
    }
    return{done: isDone, value: this[properties[count++]]};
}
return {next};
    
};
for (let p of person){
    console.log(p);
}












