// in console command
// alert(document.cookie)
// document.cookie = "name=harry9900"
// document.cookie




// Normal Variant   isko use karoge to chanses hain ki kai baar error aaye isliye niche wala Different variant use karna
/*
console.log(document.cookie);
document.cookie = "name=harry9900"
document.cookie = "name2=harry9809707892"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${key}=${value}`
console.log(document.cookie);
*/





// Different and use this variant
console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

// in console command
//decodeURIComponent("778jjn%3D%3D%3D%3D%3D=3243")







// delete cookie
/*
right click
click on inspect
click on Application tab
and click on right side on side bar "cookies tab"
then select and delete
*/






// Quick Quiz
// Print all the cookies on twitter .com
/*
goto:   https://twitter.com/home
open inspect and goto console tab
then type this,
                console.log(document.cookie)

*/