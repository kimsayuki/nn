let name = "harry"
console.log(name);
console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4));

console.log(name.slice(2,5));
console.log(name.slice(2));

console.log(name.replace("har", "per"));
let newName = name.replace("harry", "Harry Bhau")
console.log(newName);

let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " 👋🏻"));

let friend2 = "     Meena       "
console.log(friend2);
console.log(friend2.trim());

// using for loop
let fr = "Shivika"
for (let i = 0; i < fr.length; i++) {
    console.log(fr[i]);   
}