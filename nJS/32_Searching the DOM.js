const changeBgRed = () => {
    document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.color = "red"
}
// use in browser/inscpect/console   changeBgRed()

// by class
// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// by id
let cititle = document.getElementById("firstcardtitle")
cititle.style.color = "red"

let ctitle = document.getElementsByClassName("card-text")[0]
ctitle.style.fontFamily = "monospace"

// by querySelectorAll
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "green"
ctitles[2].style.color = "red"
console.log(ctitles);

let fctitle = document.querySelectorAll(".card-text")
fctitle[1].style.fontFamily = "fantasy"
fctitle[2].style.fontFamily = "impact"


//  querySelector
document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "cyan"
document.querySelector(".this").style.fontFamily = "monospace"


// tag selector
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));