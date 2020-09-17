const express = require("express");
const cors = require("cors");


var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/sales-routes")(app);


db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });