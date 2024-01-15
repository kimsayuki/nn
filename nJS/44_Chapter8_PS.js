// Chapter8 - Q1
// Answer1 is in html file

// Chapter8 - Q2
// Answer2 is in html file

// Chapter8 - Q3
let google = document.getElementById("google")
google.addEventListener("click", function(e) {
    window.location = "https://google.com"
})

let facebook = document.getElementById("facebook")
facebook.addEventListener("click", function(e) {
    window.location = "https://facebook.com"
})

let twitter = document.getElementById("twitter")
twitter.addEventListener("click", function(e) {
    window.location = "https://twitter.com"
})

// Chapter8 - Q4
/*setInterval(() => {
    // alert("hi")
    window.location = "/44_Chapter8_PS.html"
}, 5000);*/

// Chapter8 - Q5
book.classList.toggle("red")

// or

setInterval(() => {
    // alert("hi")
    bulb.classList.toggle("bulb")
}, 200);

// setTimeout(function () {
//     bulb.classList.toggle("bulb")
// }, 2000);




//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z