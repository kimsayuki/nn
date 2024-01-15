/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(56)
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000);
        // console.log("We are done");     same baat hai chai yaha likho ya niche but hamse niche likhna sahi hota hai
    })
    return p2
}).then((value)=>{
    console.log("We are done");
    return 2
}).then((value) => {
    console.log("We are pakka done");
})
*/


// Quick Quiz
/*
Rewrite the loadscript function we wrote in the beginning of this chapter using promises.
*/

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () => {reject(0)}
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value);
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((result) => {
    console.log("Second script ready");
}).catch((error)=>{
    console.log("We are sorry but we are having problems loading this script");
})