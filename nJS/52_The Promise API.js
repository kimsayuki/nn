let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 11000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error"))
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })

// Promise.all
// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value);
// })

// Promise.allSettled
// let promise_allSettled = Promise.allSettled([p1, p2, p3])
// promise_allSettled.then((value) => {
//     console.log(value);
// })

// Promise.race
// let promise_race = Promise.race([p1, p2, p3])
// promise_race.then((value) => {
//     console.log(value);
// })

// Promise.any
// let promise_any = Promise.any([p1, p2, p3])
// promise_any.then((value) => {
//     console.log(value);
// })

// Promise.resolve
// let promise_resolve = Promise.resolve(6)
// promise_resolve.then((value) => {
//     console.log(value);
// })

// Promise.reject
let promise_reject = Promise.reject(new Error("Hey"))
promise_reject.then((value) => {
    console.log(value);
})