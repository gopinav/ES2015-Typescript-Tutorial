let myMap = new Map([
  ["fname", "Chandler"],
  ["lname", "Bing"]
]);

for(let [key,value] of myMap.entries()){
  console.log(`${key} -> ${value}`);
}

for(let value of myMap.values()){
  console.log(value);
}

for(let key of myMap.keys()){
  console.log(key);
}