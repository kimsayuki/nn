// Chapter2 - Q1
/*let age = prompt("What is your age?");
if (age>10 && age<20) {
    console.log("Your age lies between 10 and 20");
    // alert("Your age lies between 10 and 20");
}
else {
    console.log("Your age doesn't lies between 10 and 20");
    // alert("Your age doesn't lies between 10 and 20");
}
*/

// Chapter2 - Q2   // Switch case
let age = prompt("What is your age?");
switch (age) {
    case "10":
        console.log("Your age is 10");
        alert("Your age is 10");     // just for alerts not mandatory
        break;
    case "11":
        console.log("Your age is 11");
        alert("Your age is 11");
        break;
    case "12":
        console.log("Your age is 12");
        alert("Your age is 12");
        break;
    case "13":
        console.log("Your age is 13");
        alert("Your age is 13");
        break;
    case "14":
        console.log("Your age is 14");
        alert("Your age is 14");
        break;
    case "15":
        console.log("Your age is 15");
        alert("Your age is 15");
        break;

    default:
        console.log("Your age is not special");
        alert("Your age is not special");
}


// Chapter2 - Q3
/*let num = prompt("What is your number?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisble by 2 and 3");
    alert("Your number is divisble by 2 and 3");
}
else {
    console.log("Your number is not divisble by 2 and 3");
    alert("Your number is not divisble by 2 and 3");
}
*/

// Chapter2 - Q4
let num = prompt("What is your number?");
num = Number.parseInt(num);
if (num % 2 == 0) {
    console.log("Your number is divisble by 2");
    alert("Your number is divisble by 2");
}
else {
    console.log("Your number is not divisble by 2");
    alert("Your number is not divisble by 2");
}
if (num % 3 == 0) {
    console.log("Your number is divisble by 3");
    alert("Your number is divisble by 3");
}
else {
    console.log("Your number is not divisble by 3");
    alert("Your number is not divisble by 3");
}


// Chapter2 - Q5
let age1 = 19
let a = age1 > 18 ? "You can drive" : "You cannot drive"
console.log(a);


//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z