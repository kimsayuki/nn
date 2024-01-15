/* // Chapter6 - Q1
let age = prompt("Hey whats your age chomu?");
age = Number.parseInt(age)
if (age < 18) {
    console.log("You cannot drive");
    alert("You cannot drive");
} else {
    console.log("You can drive");
    alert("You can drive");
}

//              OR
let age1 = prompt("Hey whats your age chomu?");
age1 = Number.parseInt(age1)

const canDrive = (age1) => {
    return age1 >= 18 ? true : false
}

if (canDrive(age1)) {
    console.log("You can drive");
    alert("You can drive");
} else {
    console.log("You cannot drive");
    alert("You cannot drive");
}

// Chapter6 - Q2
let runAgain = true;
while (runAgain) {
    let age3 = prompt("Hey whats your age chomu?");
    age3 = Number.parseInt(age3)
    if (age3 < 18) {
        console.log("You cannot drive");
        alert("You cannot drive");
    } else {
        console.log("You can drive");
        alert("You can drive");
    }
    runAgain = confirm("Do you want to play again?")
}

// Chapter6 - Q3
let runAgain1 = true;
while (runAgain1) {
    let age4 = prompt("Hey whats your age chomu?");
    age4 = Number.parseInt(age4)
    if (age4<0) {
        console.error("Please enter a valid age")
        alert("Please enter a valid age")
        break;                          // must use
    }
    if (age4 < 18) {
        console.log("You cannot drive");
        alert("You cannot drive");
    } else {
        console.log("You can drive");
        alert("You can drive");
    }
    runAgain1 = confirm("Do you want to play again?")
}

// Chapter6 - Q4
let runAgain2 = true;
while (runAgain2) {
    let number = prompt("Enter your number chomu?");
    number = Number.parseInt(number)
    
    if (number > 4) {
        location.href = "https://google.com"
        break;
    }
    runAgain2 = confirm("Do you want to play again?")
} */

// Chapter6 - Q5
// let runAgain3 = true;
// while (runAgain3) {
    let color = prompt("Hey enter the page background color chomu");
    document.body.style.background = color
//     runAgain3 = confirm("Do you want to agian change color?")
// }




//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z