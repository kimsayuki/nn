/*let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am an promise and I am fullfilled");
        // resolve(true)
        reject("I am an error")
        console.log(p);
    }, 5000);
})
console.log(p);*/

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am an promise and I am resolved");
        resolve(true)
    }, 5000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am an promise and I am rejected");
        reject("I am an error")
    }, 5000);
})

console.log(p1, p2);

// To get the value/result
p1.then((result) => {
    console.log(result);
})

// To catch the errors
p2.catch((error) => {
    console.log("some error occured in p2");
})


p2.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})