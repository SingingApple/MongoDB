const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("finding a record", () => {
  let char;
  beforeEach((done) => {
    char = new MarioChar({
      name: "Luigi",
    });
    char.save().then(() => {
      done();
    });
  });

  it("finding one record from database", () => {
    MarioChar.findOne({ name: "Luigi" }).then((res) => {
      console.log(res);
      done();
    });
  });

  it("finding one record from database by ID", () => {
    MarioChar.findOne({ _id: char._id }).then((res) => {
      console.log(res);
      assert(res._id.toString() === char._id.toString());
      done();
    });
  });
});
