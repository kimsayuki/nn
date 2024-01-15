// Chapter10 - Q1
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((value) => {
    return value.json()
}).then((contests) => {
    console.log(contests);
    ihtml = ""
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
        <div class="card mx-2" style="width: 22rem;">
        <img src="https://departments.bloomu.edu/mathcompscistats/Contest/images/contest7.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text"> and site is ${contests[item].site} </p>
            <p class="card-text"> Status is ${contests[item].status} </p>
            <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
            <p> Starts at: ${contests[item].start_time}</p>
            <p> Ends at: ${contests[item].end_time}</p>
            <a target="_blank" href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml
});




// Chapter10 - Q2
/*
let  a = prompt("Enter your note")
localStorage.setItem("note", a)
*/




// Chapter10 - Q3
/*
let  a = prompt("Enter your note")
if (a) {
    localStorage.setItem("note", a)
}

let n = localStorage.getItem("note")
alert("Your note is " + n)
*/




// Chapter10 - Q4
/*
let  a = prompt("Enter your note")
if (a) {
    localStorage.setItem("note", a)
}

let n = localStorage.getItem("note")
alert("Your note is " + n)

let c = confirm("Do you want to delete this note?")
if (c) {
    localStorage.removeItem("note")
    alert("Your note deleted succcessfully")
}
*/




//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z