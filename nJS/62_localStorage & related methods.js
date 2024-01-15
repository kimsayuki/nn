// in console commmand
// localStorage.setItem("name", "harry")
// localStorage.length
// localStorage.key(0)
// localStorage.key(1)

// delete and see local storage
/*
right click
click on inspect
click on Application tab
and click on right side on side bar "local storage"
then select and delete/edit
*/

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red" || key == "blue") {
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear()
}


// when you changed value  &  works with opend same tab two times and many times
/*
window.onstorage = (e) => {
    alert("changed")
    console.log(e);
}
*/

// localStorage.length
// localStorage.key(0)
// localStorage.key(1)