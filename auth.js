//Auhtorization Server Route
var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
//authentication dependencies
var jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

//tokens
const accessTokenSecret = "somerandomaccessjwt";
const refreshTokenSecret = "somerandomstringforrefreshtoken";

const refreshToken = [];

app.use(bodyParser.json());

app.post("/login", (req, res) => {});
