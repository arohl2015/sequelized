var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  db.burger.findAll({})
  .then(function(dbBurger){
    console.log(dbBurger);
    res.json(dbBurger);
    });
  });
//post a new burger
router.post("/burgers/create", function(req, res) {
    console.log(req.body);
  db.burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(dbBurger){
    console.log(dbBurger);
    res.json(dbBurger);
  });
});
//updating burger to devoured
router.put("/burgers/update/:id", function(req, res) {
  db.burger.update ({
    {
      devoured: true
    };
    {
      where: {
      id: req.params.id
    }
    }
    ).then(function(data) {
      console.log(data);
      res.json("/");
    });
  });

// Export routes for server.js to use.
module.exports = router;