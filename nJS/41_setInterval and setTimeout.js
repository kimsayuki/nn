// alert("Hello")
document.write("Hello")


// setTimeout - Allow us to run the function once after the interval of time
// setInterval - Allow us to run the function repeatedly after the interval of time


/*let a = setTimeout(() => {
    alert("I am inside of setTimeout")
}, 5000);

let b = prompt("Do you want to run setTimeout?")
if ("no", "n", "NO", "No", "N" == b) {
    clearTimeout(a)
}
console.log(a);
*/

//    OR

// setTimeout(function () {
//     alert("I am inside of setTimeout")
// }, 2000);


const sum = (a, b) => {
    console.log("Yes I am running " + (a + b));
    a + b
}
setTimeout(sum, 2000, 1, 2);

//setInterval
setInterval(() => {
    // alert("hi")
    console.log("hi");
}, 3000);


// FOR CLOCK

function displayTime() {
    time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
};
setInterval(displayTime, 1000);

//    OR

// function displayTime() {
//     time.innerHTML = new Date();
// };
// setInterval(displayTime, 1000);        


// func_add=()=>{ 
//     let num1=Math.floor(Math.random()*(50-1)+1);
//     let num2=Math.floor(Math.random()*(50-1)+1);
//         let a= num1+num2
//          console.log((num1)+"+"+(num2)+" = "+a)
//     }
//     setInterval(func_add,5000)