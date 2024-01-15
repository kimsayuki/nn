const fs = require('fs');
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("Lorem", "Lisa");

console.log("The Content of the file is ");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("rohan.txt", text)