// For Loops

for(let i=0; i<34; i++){         // yeh puroi 0 se leke 33 tak line bana dega
console.log(i);
// console.log(i + 1);          // yeh 1 se leke 34 tak line bana dega
}

let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for(let i=0; i<n; i++) {
    sum += (i+1)
    console.log((i+1), "+");
}
console.log("Sum of first" + " " + n + " " + "natural numbers is " + sum);


// For-In-Loops
let obj = {
    harry: 40,
    larry: 90,
    parry: 60,
    carry: 10,
    darry: 100
}
for (const a in obj) {
    console.log("Marks of" + " " + a + " " + "are" + " " + obj[a]);
}

// For-Of-Loops
for (const b of "Harry") {
    console.log(b);
}