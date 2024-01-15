const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}

const changeBgYellow = () => {
    document.body.firstElementChild.nextElementSibling.style.background = "yellow"
}

let b = document.body
console.log("First child of b is: ", b.firstChild);      // jab ham firstChild use karte hain tab hamne firstChild ke andar ka koi bhi node mil sakta hai

console.log("First Element child of b is: ", b.firstElementChild.nextElementSibling);      // jab ham firstElementChild ka use karte hain tab hame dedicated wahi node milta hai jo hamne search kiya hai