let name = "harry"
console.log(name);
console.log(name[0]);
console.log(name[1]);
console.log(name.length);

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence);

// Escape Sequence Characters
let fruit = 'Bana\'na'
console.log(fruit);
console.log(fruit.length);

let fruit1 = 'Bana\nna'
console.log(fruit1);

let fruit2 = 'Bana\tna'
console.log(fruit2);

let fruit3 = 'Bana\rna'
console.log(fruit3);



// other escape sequence characters are as follows
//     \   ---> use single codes with single codes
//     \n  ---> Newline
//     \t  ---> Tab
//     \r  ---> Carriage Return