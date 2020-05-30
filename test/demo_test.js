const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("saving to database", function () {
  //Create tests
  //   it("adds two number together", () => {
  //     assert(2 + 3 === 5);
  //   });
  it("Saves record to database", (done) => {
    let char = new MarioChar({
      name: "Mario",
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
