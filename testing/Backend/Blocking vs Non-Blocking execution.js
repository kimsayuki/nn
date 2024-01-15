// Blocking vs Non-Blocking execution
console.log("hi");

// Syncronous or blocking      pehle kaam pura hoga tab aage bado
//  -line by line execution
// const fs = require('fs');
// let text = fs.readFileSync("dele.txt", "utf-8");
// console.log(text);


// Asyncronous or non-blocking     jab kaam pura hoga tab hoga abhi ke liye aage bado
//  -line by line execution nor guranteed
//   -callback will fire

const fs = require('fs');
fs.readFile("/Users/anand/Desktop/nn/testing/rohan.txt", "utf-8", (err, data) =>{
    console.log(data);
});

console.log("This is a Message");