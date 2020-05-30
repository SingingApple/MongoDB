const mongoose = require("mongoose");
//ES6 promise
mongoose.Promise = global.Promise;
//Connnect to database before running test
before((done) => {
  mongoose.connect("mongodb://localhost/testaroo");

  mongoose.connection
    .once("open", () => {
      console.log("Connection made");
      done();
    })
    .on("error", (error) => {
      console.log(error);
    });
});
// drop a collection before each test
beforeEach((done) => {
  //drop collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  })
})