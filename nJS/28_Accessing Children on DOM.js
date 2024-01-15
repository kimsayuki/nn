// firstChild, lastChild & childNodes
/* element.firstChild   ->     first child element
element.lastChild   ->      last child element
element.childNodes   ->     All child element */

console.log(document.body.firstChild);
console.log(document.body.lastChild);

// let arr = Array.from(document.body.childNodes)
// console.log(arr);
console.log(document.body.childNodes);
// childNodes looks like an Array But it's not actually an Array But This is a Collection, We can use Array.from(collection) to convert it into an Array.