
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller.js");

var app = express();

var PORT = process.env.PORT || 3366;
// var PORT = 3306;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var path = require("path"); 
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

burgers = []; 


// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Server listening on: http://localhost:" + PORT);
//   });
// });


app.listen(PORT, function() {
  console.log("🌎 Server listening on: http://localhost:" + PORT);
});