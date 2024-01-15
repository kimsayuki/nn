const express = require('express');    // yeh hamne ek module import kar liya hai
const app = express();      // aur yeh hamne ek app bana li hai
const fs = require('fs');
const path = require('path');
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));     // For Serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');      // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));       // set the views directory

// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const hon = "Hello There!"
    const panda = {'title': "PUBG is the best game", content:con, heading:hon};
    res.status(200).render('index.pug', panda);
});

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of client is ${name}, ${age} years old, ${gender}, residing at ${address}. More About Him/Her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite);

    const panda = {'message': "Your form has been submitted successfully"};
    res.status(200).render('index.pug', panda);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});