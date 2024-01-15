// alert("Enter the value of a")
// let a = prompt("Enter here")
// document.write(a)



alert("Enter the value of a")
let a = prompt("Enter here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it on the page")
if (write) {
    document.write(a)
} else {
    // document.write("Please allow me to write")
    // alert("Please allow me to write");
}



// alert("Enter the value of a")
// let a = prompt("Enter here", "578")
// a = Number.parseInt(a)
// alert("You entered a of type " + (typeof a))
// document.write(a)



// A loop in else that will execute this code back from the beginning
while (true) {
    alert("Enter the value of a");
    let a = prompt("Enter here", "578");
    a = Number.parseInt(a);
    alert("You entered a of type " + (typeof a));
    let write = confirm("Do you want to write it on the page");
    if (write) {
      document.write(a);
      break; // Exit the loop if the user allows writing
    } else {
      alert("Please allow me to write");
    }
  }