
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve("Script has been loaded Sir: " + src)
        }
        document.head.append(script)
    })
}

// Chapter9 - Q1
/*
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
    console.log(value);
})
*/


// Chapter9 - Q2
/*
const main1 = async () => {
    console.log(new Date().getMilliseconds());
    console.time("main1")
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
    console.log(a);
    console.timeEnd("main1")
    console.log(new Date().getMilliseconds());
}
main1()
*/


// Chapter9 - Q3
/*
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Please this is not acceptable"))
        }, 3000);
    })
}

let a = async () => {
    try {
        let c = await p()
        console.log(c);
    } catch (error) {
        console.log("This error has been handeled");
    }
}
a()
*/


// Chapter9 - Q4
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

const run = async () => {
    // console.time("run")
    // let a1 = await p1()
    // let a2 = await p2()  
    // let a3 = await p3()
    // console.log(a1, a2, a3);
    // console.timeEnd("run")

    console.time("run")
    let a1 = await p1()
    let a2 = await p2()  
    let a3 = await p3()
    let all = await Promise.all([a1, a2, a3])
    console.log(all);
    console.timeEnd("run")
}
run()





//  Questions & Notes Links
//      https://drive.google.com/drive/folders/1RcyvvOAxJtNc_mPLt9g-kTHIMUZ3uD8z