const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("saving to database", function () {
  //Create tests
  //   it("adds two number together", () => {
  //     assert(2 + 3 === 5);
  //   });
  it("Saves record to database", () => {
    let char = new MarioChar({
      name: "Mario",
    });
    char.save();
  });
});
