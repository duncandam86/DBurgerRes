const express = require("express");

const router = express.Router();


// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger");

// Create the routes 
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/burgers", function (req, res) {
  burger.insertOne([
    'burger_name'
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect('/');
    });
});

router.put("/burgers/:id", function (req, res) {
  let condition = 'id = ' + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (data) {
    if (data.changedRow === 0) {
      return res.status(404).end()
    } else {
      res.redirect('/');
    }
  });
});

//Export routes for server.js
module.exports = router;