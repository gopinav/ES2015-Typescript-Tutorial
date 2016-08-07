
let displayColors = function(message, ...colors){

     console.log(message);
     console.log(colors);
     
     
    for(let i in colors){
        console.log(colors[i]);
        
    }
}

let message = "List of Colors"

displayColors(message, 'Red');
displayColors(message, 'Red','Blue');
displayColors(message, 'Red','Blue','Green');