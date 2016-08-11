//let employee = ["Chandler", "Bing", "Female"];
//let [fname, lname, gender="Male"] = employee;
let employee = {
    fname: "Chandler",
    lname: "Bing",
    gender: "Male"
};

let {fname, lname, gender} = employee;



console.log(fname);
console.log(lname);
console.log(gender);


/* With Alias
let {fname: f, lname: l, gender: g} = employee;



console.log(f);
console.log(l);
console.log(g);
*/