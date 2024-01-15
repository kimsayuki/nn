// Inserting data in Mongo db (data base)

use harryKart

// for show the data
db.items.find()

// for show databases
show dbs

// for show collections
show collections


// for insert one
db.anotherCollection.insertOne({a: 89})

db.items.insertOne({name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

// insert multiple
db.items.insertMany([{name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name:"iPhone 12", price: 64000, rating: 4.5, qty: 323, sold: 78}, {name:"moto g19", price: 12000, rating: 3.5, qty: 213, sold: 378}])

db.items.insertMany([{name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name:"iPhone 12", price: 64000, rating: 4.5, qty: 323, sold: 78}, {name:"moto g19", price: 12000, rating: 3.5, qty: 213, sold: 378, isBig:true}])



// for quering & filter object
db.items.find({rating: 4.5})

// for greater than object query
// $gte - greater than equal to
db.items.find({rating: {$gte: 3.5}})
// $gt - greater than
db.items.find({rating: {$gt: 3.5}})

// And Operator
db.items.find({rating: {$gt: 3.5}, price: {$gt: 12000}})

// for less than & And Operator
db.items.find({rating: {$lt: 4.5}, price: {$lt: 13000}})

// OR Operator
db.items.find({$or:[{rating: {$lt: 4.5}}, {price: {$lt: 64000}}]})
    

db.items.find({$or:[{rating: {$lt: 4.5}}, {price: {$lte: 64000}}]})


db.items.find({rating: {$gt: 3.5}}, {rating:1})

db.items.find({rating: {$gt: 3.5}}, {rating:1, qty:1})


// For deleting items
// for one
db.items.deleteOne({price: 64000})

// for many
db.items.deleteMany({price: 64000})

db.items.deleteMany({price: {$lt: 22000}})



// insert collection
db.anotherCollection.insertOne({a: 89})

// for update
//for one
db.items.updateOne({name: "moto g19"}, {$set: {price: 2}})


// for many
db.items.updateMany({name: "moto g19"}, {$set: {price: 3, rating:1, qty: 20000}})




// Some Additional Knowledge Out of Video:--
// db.item.deleteOne({ Price: "990$" });
// //for deleting One element from collection
// db.item.deleteMany({ Price: "990$" });
// //for deleting Many element from collection
// db.vikas.drop()
// //For deleting the selected collection
// db.dropDatabase()
// //it deletes the Current data base
