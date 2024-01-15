// sessionStorage used less often than localstorage, properties and methods are same as localstorage but The sessionStorage exist only within the current browser tab, Another tab with some pages will have differnt storage,  the data survives page refresh but not closing/opening the tab

//in console commands
// sessionStorage.setItem("name", "harry")
// sessionStorage.clear()


// when you changed value  &  works with opend same tab two times and many times
/*
window.onstorage = (e) => {
    alert("changed")
    console.log(e);
}
*/


// All coding and command are same as localStorage , Only localStorage will be replaced by sessionStorage