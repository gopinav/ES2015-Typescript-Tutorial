let iterable = [1,2,3];

function createIterator(array){
    let count = 0;
    return{
        next: function(){
            return count < array.length? 
            {value: array[count++], done:false}:
            {value: undefined, done:true};
        }
    }
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());



/*Iterable {
    [symbol.Iterator]() : Iterator
}

Iterator{
    next() : IResultObj
}
IResultObj{
    value: any 
    done: bool
}

*/