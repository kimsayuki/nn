// Promise   use for parallel executions

let promise = new Promise((resolve, reject) => {
    alert("Hello");
    resolve(56)
})

console.log("Hello One");
setTimeout(() => {
    console.log("Hello Two in 2 seconds");
}, 2000);
console.log("My name is " + "Hello Three");

console.log(promise);