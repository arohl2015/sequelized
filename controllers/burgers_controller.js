var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
      //converts object to handlebars
    var burObject = {
      burgers: data
    };
    console.log(burObject);
    res.render("index", burObject);
  });
});
//post a new burger
router.post("/api/burgers", function(req, res) {
    console.log(req.body);
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.data.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
//updating burger to devoured
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
console.log(JSON.stringify(req.body))
  burger.update({
   devoured : true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;