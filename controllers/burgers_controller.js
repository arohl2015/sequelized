// var express = require("express");
// var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {
// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
app.get("/burgers", function(req, res) {
  db.burger.findAll({raw:true}).then(function(data) {
      console.log("Data from database",data)
      var burObject = {
          burgers:data
      };
      // console.log(burObject.burgers);
      res.render("index", burObject);
  });
});
//post a new burger
app.post("/api/burgers", function(req, res) {
  console.log(req.body.name);
  db.burger.create({
      burger_name: req.body.name
  }).then(function(result) {
    // console.log(result);
      res.redirect("/");
  });
});
//updating burger to devoured
app.put("/api/burgers/:id", function(req, res) {
  db.burger.update(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});
};