var getRegvalue = function(){
    return 10;
}
console.log(getRegvalue());

/*
const getArrowvalue = () => {
    return 10;
}

const getArrowvalue = m => {
    return m;
}

*/

const getArrowvalue = (m,bonus) => 10*m+bonus;

console.log(getArrowvalue(5,50));

console.log(typeof getArrowvalue);