const dbqueries = require("../models/burger.js");


const express = require("express");
const router = express.Router();

router.get("/", function(request, result) {
  dbqueries.getBurgers(function(data) {
    burgers = data;

    result.render("index", {
      burgers: burgers
    });
  });
});


router.post("/api/burgers", function(request, resultAPI) {
  dbqueries.addburger(request.body.new_burger, function(result) {
    resultAPI.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(request, resultAPI) {
  var burger_id = request.params.id;

  dbqueries.eatBurger(burger_id, function(result) {
    if (result.changedRows == 0) {
      return resultAPI.status(404).end();
    } else {
      resultAPI.status(200).end();
    }
  });
});

module.exports = router;