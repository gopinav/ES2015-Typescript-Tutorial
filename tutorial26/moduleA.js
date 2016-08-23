
import {fname, lname, obj} from './moduleB.js'  // log Module B laoded

obj.name = "Ross";
console.log(obj.name);
console.log(` ${fname} ${lname}`);