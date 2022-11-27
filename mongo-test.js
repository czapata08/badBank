// const MongoClient = require("mongodb").MongoClient;
// //path to database on default port
// const url = "mongodb://localhost:27017";
// //connect to mongo
// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
//   console.log("CONNECTED");

//   //database name

//   const dbName = "badbank2";
//   const db = client.db(dbName);

//   //new user

//   var name = "user" + Math.floor(Math.random() * 10000);
//   var email = name + "@kibble.com";

//   //insert customer into table
//   var collection = db.collection("customers");
//   var doc = { name, email };
//   collection.insertOne(doc, { w: 1 }, function (err, result) {
//     console.log("DOCUMENT INSERT");
//   });

//   var customers = db

//     .collection("customers")

//     .find()

//     .toArray(function (err, docs) {
//       console.log("Collection:", docs);

//       // clean up

//       client.close();
//     });
// });
