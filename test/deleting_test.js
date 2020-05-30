const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("deleting records", () => {
  let char;
  beforeEach((done) => {
    char = new MarioChar({
      name: "anurag",
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });

    it("deleting a record", () => {
      MarioChar.findOneAndRemove({
        _id: char._id,
      }).then((res) => {
        MarioChar.findOne({ _id: char._id }).then(() => {
          assert(res === null);
          done();
        });
      });
    });
  });
});
