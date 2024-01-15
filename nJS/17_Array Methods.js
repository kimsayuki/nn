let num = [1, 2, 3, 34, 4]
console.log(num, typeof num);

// toString()
let b = num.toString()    // b is now string (object se string mein change karne ke liye) .toString()
console.log(b, typeof b);


// join()
let c = num.join("_")
console.log(c, typeof c);

let c2 = num.join("a")
console.log(c2, typeof c2);


// pop()
num.pop()
console.log(num, typeof num);

// let d = num.pop()
// console.log(d, typeof d);

// console.log(num, d);
// console.log(num, typeof num, d, typeof d);


// push()
num.push(56)
console.log(num);


// shift()
num.shift()
console.log(num);    // shift() starting se ek word remove kar dega


// unshift()
num.unshift(78)
console.log(num);    //unshift() starting mein ek word add kar dega


// delete
delete num[1]
console.log(num);


// concat()
let num_more = [11, 12, 13, 14, 15]
let newArray = num.concat(num_more)
console.log(newArray);


// sort()
console.log(num);
num.sort()      // yeh sabko ascending order mein arrange kar deta hai
console.log(num);


// sort(compare)
let compare = (a, b) => {
    return b - a
    // return a - b
}
console.log(num);
num.sort(compare)    // yeh sabko descending order mein kar deta hai
console.log(num);


// reverse()
console.log(num);
num.reverse()       // yeh sabko reverse kar dega
console.log(num);


// Splice and Slice
let num2 = [551, 27, 64, 44, 80, 32, 32]
console.log(num2);
num2.splice(2, 3, 1021, 1022, 1023)     // yeh purane numbers ko uski location se remove karke nai numbers ko add kar deta hai jo hamne diye hue hai
// num2.splice( 2 number se delete karo 3 number tak aur jo number hamne diye hai use insert kar do)
console.log(num2);

let newNum = num2.slice(2)
console.log(newNum);