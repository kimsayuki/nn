// Syncronous Programming
/*let a = prompt("What is you name?")
let b = prompt("What is you age?")
let c = prompt("What is you favorite color?")
console.log(a + "is" + b + "years old has" + c + "is favorite color");
// document.write(a + "is" + b + "years old has" + c + "is favorite color"); */

// Asyncronous Programming
/*console.log("start");
setTimeout(() => {
    console.log("Hey I am here");
    document.write("Hey I am here");
}, 3000);
console.log("end"); */

// Callbacks
function loadscript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return
    }
    alert("Hello " + src)
}

function goodmorning(src) {
    alert("Good Morning " + src)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)