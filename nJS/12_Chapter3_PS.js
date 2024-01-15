// Chapter3 - Q1  // for loops
let marks = {
    harry: 90,
    lovish: 78,
    larry:40,
    monika: 3
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " " + "are" + " " + marks[Object.keys(marks)[i]]);
}

// Chapter3 - Q2   // for in loops
for (let key in marks) {
    console.log("The marks of " + key + " " + "are" + " " + marks[key]);
}

// Chapter3 - Q3
let cn = 43
let i
while (i != cn) {
    i = prompt("Enter a number");
}
console.log("You have entered a correct number");
alert("You have entered a correct number");

// Chapter3 - Q4
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7));


//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z