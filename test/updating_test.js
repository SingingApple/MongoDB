const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("updating records", () => {
  let char;

  beforeEach((done) => {
    char = new MarioChar({
      name: "Mario",
      weight: 50,
    });

    char.save().then(() => {
      done();
    });
  });

  //creating test

  it("Updates record in a db", (done) => {
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Ryu" }).then(() => {
      MarioChar.findOne({ _id: char._id }).then((result) => {
        assert(result.name === "Ryu");
        done();
      });
    });
  });
  it("increment weight by 1", (done) => {
    MarioChar.update({}, { $inc: { weight: 1 } }).then((res) => {
      MarioChar.findOne({ name: "Mario" }).then((ress) => {
        assert(ress.weight === 51);
        done();
      });
    });
  });
});
