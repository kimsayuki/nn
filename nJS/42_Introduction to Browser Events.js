function toggleHide() {
    let btn = document.getElementById("btn")
    let para = document.getElementById("para")
    if (para.style.display != 'none') {
        para.style.display = 'none'
    } else {
        para.style.display = 'block'
    }
}

// mouseover
let para = document.getElementById("para")
para.addEventListener("mouseover", function run() {
    // alert("paragraph ke andar cursor gaya")
    console.log("paragraph ke andar cursor gaya")
})

// mouseout
para.addEventListener("mouseout", function run() {
    // alert("paragraph se cursor bahar gaya")
    console.log("paragraph se cursor bahar gaya")
})


// mouseover
// mouseout
// onclick
// onmouseenter