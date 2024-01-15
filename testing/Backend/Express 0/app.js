// yeh hamne ek module import kar liya hai
const express = require('express');
// aur yeh hamne ek app bana li hai
const app = express();
const path = require('path');
const port = 80;

// For Serving static files
app.use('/static', express.static('static'));

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo end point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey boy', message: 'Hello there! what the fuck are you going' });
  });

app.get("/", (req,res)=>{
    res.status(200).send("This is home page of my first express app with harry");
});

app.get("/about", (req,res)=>{
    res.send("This is about page of my first express app with harry");
});

app.post("/about", (req,res)=>{
    res.send("This is post request about page of my first express app with harry");
});
app.get("/this", (req,res)=>{
    res.status(404).send("This is page are not found");
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});