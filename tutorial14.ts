
let displayColors = function(message, ...colors){

     console.log(message);
//     console.log(colors);
     
     
    for(let i in colors){
        console.log(colors[i]);
        
    }
}

let message = "List of Colors"

let colorArray = ['Orange','Yellow','Indigo'];
displayColors(message, ...colorArray)

//displayColors(message, 'Red');
//displayColors(message, 'Red','Blue');
//displayColors(message, 'Red','Blue','Green');

