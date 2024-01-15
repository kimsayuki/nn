// Chapter7 - Q1
let navbar = document.getElementById("navbar")
navbar.style.color = "red"
navbar.style.background = "pink"

// Chapter7 - Q2
// Answer is No, tbody are not shown in view page source, it can only shon in inspect tab

// Chapter7 - Q3
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

// Chapter7 - Q4
// let lin = document.querySelectorAll("#lin")
// lin[0].style.background = "cyan"
// lin[1].style.background = "cyan"
// lin[2].style.background = "cyan"

//      OR

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
  });

// Chapter7 - Q5
// Answer None of these



//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z