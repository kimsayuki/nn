// id se class pata karen
let a = first.getAttribute("class")
console.log(a);

// hasAttribute
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// setAttribute
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")

// removeAttribute
// first.removeAttribute("class")
// console.log(first.attributes);

// data*   data ke baad - hypen laga kar apna koi naam dedo aur object bana lo like this data-game = "mario"
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);