const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');
// for mongo
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost/contactDance');
}
// listen on localhost:8000
const port = 80;


// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

const Contact = mongoose.model('Contact', contactSchema);  


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));     // For Serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');      // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));       // set the views directory

// ENDPOINTS
app.get('/', (req,res)=>{
    const panda = {};
    res.status(200).render('home.pug', panda);
});

app.get('/contact', (req,res)=>{
    const panda = {};
    res.status(200).render('contact.pug', panda);
});

// data contact page to mongo
app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")   
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
});

// local output.txt save
// app.post('/', (req, res)=>{
//     name = req.body.name
//     phone = req.body.phone
//     email = req.body.email
//     address = req.body.address
//     desc = req.body.desc

//     let outputToWrite = `The Name of Client is ${name}, & Phone No. is ${phone}, & Email ID is ${email}, residing at ${address}. Concers His/Her: ${desc}`
//     fs.writeFileSync('output.txt', outputToWrite);

//     const panda = {'message': "Your form has been submitted successfully"};
//     res.status(200).render('contact.pug', panda);
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});





// npm init
// npm install nodemon
// npm install express
// npm install mongoose
// npm install body-parser