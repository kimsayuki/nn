console.log(document.body.firstChild);
a = document.body.firstChild
console.log(a.parentNode);   // parentNode har cheez return kar dega bas node hona chahiye
console.log(a.parentElement);    // parentElement sif original element ko hi return karega warna null return kar dega

console.log(a.firstChild.nextSibling);