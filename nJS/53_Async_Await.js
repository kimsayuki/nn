/*async function harry() {
    return 5
}

harry().then((x) => {
    alert(x)
})

//      or

// harry().then(alert)
*/


// Method 1 without Async Await
/*
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000);
    })
    
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000);
    })

    delhiWeather.then(alert)
    bangloreWeather.then(alert)
}
console.log("Welcome to weather control room");
harry()
*/


// Method 2 with Async Await
/*
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000);
    })
    
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000);
    })

    console.log("Fetching Delhi Weather Plesae Wait...");
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW);

    console.log("Fetching Banglore Weather Plesae Wait...");
    let bangloreW = await bangloreWeather
    console.log("Fetched Banglore Weather: " + bangloreW);
    
    return [delhiW, bangloreW]
}
console.log("Welcome to weather control room");
harry()
*/


// Method 3 with Async Await but it's bit of different
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000);
    })
    
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000);
    })

    console.log("Fetching Delhi Weather Plesae Wait...");
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW);

    console.log("Fetching Banglore Weather Plesae Wait...");
    let bangloreW = await bangloreWeather
    console.log("Fetched Banglore Weather: " + bangloreW);
    
    return [delhiW, bangloreW]
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await cherry()
    let b = await harry()
}
const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}
main1()