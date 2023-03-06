const express = require("express");
const router = express.Router();

const accountModel = require("../models/accountModel");

router.get("/", function (req, res, next) {
  res.send("GET method");
});

//Register funtion
router.post("/register", function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Username and password are required.");
    return;
  }

  accountModel.findOne({ username: req.body.username }).then((data) => {
    if (data) {
      res.status(409).send("Username already taken.");
    } else {
      accountModel
        .create({
          username: req.body.username,
          password: req.body.password,
        })
        .then((data) => {
          res.status(201).send("Account created successfully!");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Error creating account.");
        });
    }
  });
});
// Login funtion
router.post("/login", function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Username and password are required.");
    return;
  }
  accountModel
    .findOne({ username: req.body.username, password: req.body.password })
    .then((data) => {
      if (data) {
        res.send(" Login successfully!");
      } else {
        res.send("Username or Password is not correct!");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating account.");
    });
});
// Add more routes here, as needed.

module.exports = router;
