// classical for loop & for each loop
//         0, 1, 2, 3, 4   key
let num = [3, 54, 1, 2, 4]

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// for each
num.forEach(element => {
    console.log(element * element);
});

// Array.from
let name = "Harry"
let arr = Array.from(name)
console.log(arr);

// for of
for (i of num) {
    console.log(i);
}

// for in
for (let i in num) {
    console.log(i);     // yeh object ki key batayega
}