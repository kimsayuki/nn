// console.log(window);
window.console.log(window);

// console.log(document);
console.log(document.body);
document.body.style.background = "red"

// on browser command
//  location.href = "https://youtube.com"
// document
// document.body




// Ask background color & change it
while (true) {
    alert("Type the background color");
    let a = prompt("Type here", "red");
    let write = confirm("Do you want to change the background color");
    if (write) {
      document.body.style.background = a
      break; // Exit the loop if the user allows writing
    } else {
      alert("Please allow me to change the background color");
    }
  }
  
// Just Demo  
  // let a = prompt("Type here", "red");
  // document.body.style.background = a



  while (true) {
    alert("Type your website link");
    let a = prompt("Type here", "https://youtube.com");
    let write = confirm("Do you want to redirect the link");
    if (write) {
      location.href = a
      break; // Exit the loop if the user allows writing
    } else {
      alert("Please allow me to redirect the link");
    //   break; // Exit the loop if the user allows writing
    }
  }  