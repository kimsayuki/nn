// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/harryKart');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // We're connected!
    console.log("We are connected bro/sis..");
})

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name
  console.log(greeting);
};

const Kitten = mongoose.model('harryKitty', kittySchema);

const harryKitty = new Kitten({ name: 'harryKitty' });
const harryKitty2 = new Kitten({ name: 'harryKitty2' });
// console.log(harryKitty.name);
// harryKitty.speak();

// harryKitty.save(function (err, harryKitty){
//   if (err) return console.error(err);
//   harryKitty.speak();
// });

harryKitty.save();
harryKitty.speak();

harryKitty2.save();
harryKitty2.speak();

const kittens = Kitten.find({name: "harryKitty"});
console.log(kittens);