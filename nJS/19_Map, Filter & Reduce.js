let arr = [45, 23, 21]
// console.log(arr);

// map()
let a = arr.map((value, index, array) => {      // map ham tab use karte hai jab hame naya array banana hota hai
    console.log(value, index, array);
    return value + 1
})
console.log(a);

// Array Filter Method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((value) => {
    return value < 10
})
console.log(a2);

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
let a3 = arr3.reduce((value1, value2) => {
    return value1 + value2
})
console.log(a3);