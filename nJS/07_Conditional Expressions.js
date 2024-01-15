// is  file ke codes ko repelit ya browser ke console par paste karke use karna hai vscode ke terminal mein nahi chalenge

let a = prompt("Hey whats your age chomu?");
a = Number.parseInt(a);   // converting the string to a number

// console.log(typeof a);

// if (a>17) {
//     alert("This is a valid age")
// }

if (a < 0) {
    alert("This is invalid age")
}
else if(a<9){
    alert("You are kid and you cannot even think of to visit this website")
}
else if(a<18 && a>=9){
    alert("You are kid and you can think of after 18 to visit this website")
}
else {
    alert("This is a valid age to visit this website CONTINUE NOW:")
}
console.log("Done");
console.log("You can", (a<18? "not drive" :"drive"));








// MAIN:

// let a = prompt("Hey whats your age chomu?");
// a = Number.parseInt(a);
// // console.log(typeof a);
// if (a>0) {
//     alert("This is a valid age")
// }
// console.log("Done");


// let a = prompt("Hey whats your age chomu?");
// a = Number.parseInt(a);
// if (a > 18) {
//     alert("This is a valid age to visit this website")
// }
// else {
//     alert("This is not a valid age to visit this website")
// }
// console.log("Done");
// console.log("You can", (a<18? "not drive" :"drive"));


// let a = prompt("Hey whats your age chomu?");
// a = Number.parseInt(a);
// if (a < 0) {
//   alert("This is invalid age")
// }
// else if (a < 9) {
//   alert("You are kid and you cannot even think of to visit this website")
// }
// else if (a < 18 && a >= 9) {
//   alert("You are kid and you can think of after 18 to visit this website")
// }
// else {
//   alert("This is a valid age to visit this website CONTINUE NOW:")
// }
// console.log("Done");
// console.log("You can", (a<18? "not drive" :"drive"));