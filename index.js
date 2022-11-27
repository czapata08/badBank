var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

//used to serve static files from public directory
app.use(express.static("public"));
// add cors headers
app.use(cors());

//create user account
app.get(
  "/account/create/:firstname/:lastname/:email/:password/:address/:zip/:balance",
  function (req, res) {
    dal
      .create(
        req.params.firstname,
        req.params.lastname,
        req.params.email,
        req.params.password,
        req.params.address,
        req.params.zip,
        req.params.balance
      )
      .then((user) => {
        console.log(user);
        res.send(user);
      });
  }
);

//Update User
app.get("/account/updateuser/:name", function (req, res) {
  dal.updateuser(req.params.name).then((result) => {
    console.log(`update user ${JSON.stringify(result)}`);
    res.send(result);
  });
});

//User Login
app.get("/account/querydb/:email/:password", function (req, res) {
  dal.querydb(req.params.email, req.params.password).then((result) => {
    console.log(`querydb from server ${JSON.stringify(result)}`);
    res.send(result);
  });
});

//all accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

//Delete User
app.get("/account/deleteuser/:address", function (req, res) {
  dal.deleteuser().then((result) => {
    console.log(`1 document deleted`);
    res.send(result);
  });
});

//init
var port = 3000;
app.listen(port);
console.log("Running on port: " + port);
