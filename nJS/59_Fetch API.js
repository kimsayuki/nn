let p = fetch("https://goweather.herokuapp.com/weather/Osaka")
p.then((value1) => {
    return value1.json()
    // return value1.text()
    // console.log(value1.status);
    // console.log(value1.ok);
}).then((value2) => {
    console.log(value2);
})