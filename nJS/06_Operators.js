console.log("Operators in Js");


// Airthmetic Operators
let a = 10
let b = 4
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a * b = ", a * b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);


// Assignment Operators
let assignment = 1;
assignment += 5 // same as   assignment = assignment + 8
console.log(assignment);
assignment -= 5 // same as   assignment = assignment - 8
console.log(assignment);
assignment *= 5 // same as   assignment = assignment * 8
console.log(assignment);
assignment /= 5 // same as   assignment = assignment / 8
console.log(assignment);


// Comparison Operators
let comp1 = 6
// let comp2 = 6
// let comp2 = "6"
let comp2 = 7
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2);
// console.log("comp1 ? comp2 is ", comp1 ? comp2);


// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);     // True and True will be  True
console.log(x>y || x==5);     // dono mein se koi bhi true hua to  True hi return karega
console.log(!true);
console.log(!false);