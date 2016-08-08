let firstname = "Chandler";
let lastname = "Bings";

let person = {
    firstname,
    lastname
};

function createPerson(firstname, lastname, age){
    let fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname, 
        fullname,
        isSenior(){
            return age>60;
        }}
}

let p = createPerson("Ross","Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());



//console.log(person.firstname);
//console.log(person.lastname);
