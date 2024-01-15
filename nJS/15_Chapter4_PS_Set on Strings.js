// Chapter4 - Q1
console.log("har\"".length);

// Chapter4 - Q2
const sentence = "The fox is very clever"
const word = "fox"
const word2 = "fox2"
console.log(sentence.includes(word));  // agar fox word sentence mein exist karega to hi true aayega
console.log(sentence.includes(word2));

console.log(sentence.startsWith("The"));
console.log(sentence.startsWith("This"));

console.log(sentence.endsWith("clever"));
console.log(sentence.endsWith("very"));
console.log(sentence.endsWith("Clever"));

// Chapter4 - Q3
let name = "Harry"
console.log(name.toLowerCase());

// Chapter4 - Q4
let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length);
let amount2 = str2.slice(15);
console.log(amount);
console.log(amount2);
console.log(str2.length);

// Chapter4 - Q5
let friend = "Deepika"
friend[3] = "R"
console.log(friend);  //    friend is not changed, because stings is immuteable

console.log(friend.replace("Deepika", "DeeRika")); //  lekin is tarah se change kar sakte hai


//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z