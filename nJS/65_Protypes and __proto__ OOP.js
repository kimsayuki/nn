let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {                // agar yaha par run function na hua to yeh niche wala run apne aap le lega
        alert("self run")
    }
}
console.log(a);

let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name);