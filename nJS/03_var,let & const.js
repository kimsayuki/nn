console.log("Hello JavaScript");

// var, let  & const
var a = 45;
let b = "Harry";
var c = null;
var d = undefined;
const author = "Sohie";

{
    let b = "this"
    console.log(b);
}
console.log(b);
console.log(author);

//  var can be updated & re-declared within its scope
//  let can be updated but not re-declared,   but but it's again can be used in other scopes / functions
//  const can neither be updated or nor be re-declacred