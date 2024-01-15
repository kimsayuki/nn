console.log("This is Tutorial");

function greet (name){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

function subtract(a,b,c){
    let d = a - b - c;
    return d;
}

let name = "Sohie";
let name1 = "Harry";
let name2 = "Rohan";
let name3 = "Subham";
let name4 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);

let returnVal = sum(1,2,4);
console.log(returnVal);

let returnVal1 = subtract(12,4,1);
console.log(returnVal1);

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");