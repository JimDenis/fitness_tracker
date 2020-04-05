const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
require("./routes/html-routes.js")(app);
require("./routes/workout-api-routes.js")(app);

module.exports = function(app) {
  console.log("im here")
  // Find all Authors and return them to the user with res.json
  
 
  

};



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
