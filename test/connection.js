const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/testaroo");
mongoose.connection
  .once("open", () => {
    console.log("Connection made");
  })
  .on("error", (error) => {
    console.log(error);
  });
