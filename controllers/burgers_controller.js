var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
      var burObject = {
          burgers:data
      };
      res.render("index", burObject);
  });
});
//post a new burger
router.post("/", function(req, res) {
  console.log(req.body);
  db.burger.create({
      burger_name: req.body.burger_name,
      devoured: 0
  }).then(function() {
      res.redirect("/");
  });
});
//updating burger to devoured
router.put("/:id", function(req, res) {
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

// Export routes for server.js to use.
module.exports = router;