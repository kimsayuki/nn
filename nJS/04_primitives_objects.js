// nn bb ss u  -  Primitives in Js
let a = null;
let b = 345;
let c = true;   // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
// let g  - yeh bhi undefied hai zaroori nahi hai ki undefined likho


// both printing types are worked same
console.log(a, b, c, d, e, f, g);
console.log(a,b,c,d,e,f,g);

console.log(typeof d);        //  check the type of objects / primitives


// Objects in Js
const item = {
    "Harry": true,
    "Hermoine": false,
    "Lovish": 67,
    "Rohan": undefined
}

console.log(item["Hermoine"]);
console.log(typeof item);      //  check the type of objects / primitives