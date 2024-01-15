// console.log(id1);

// matches()
let id1 = document.getElementById("id1")
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

// closest()
let sp1 = document.getElementById("sp1")
console.log(sp1.closest("#sp1"));

// contains()
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));





// matches(css/class/id) --> to check if element matches the given (ss/class/id) selector
// closest(ss/class/id) --> to look for the nearest ancestor that makes the given (ss/class/id) selector. the element itsef is also checked
// elemA.contains(elemB) --> return true if elemB is inside elemA (a descendant of elemA) or when elemA == elemB