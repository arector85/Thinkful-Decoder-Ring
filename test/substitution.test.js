// Write your tests here!
const { substitution } = require("../src/substitution.js");
const expect = require('chai').expect;

describe("substitution", () => {
    it("all characters in alphabet parameter should be unique otherwise return false", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
      expect(actual).to.equal(expected);
    })

    it("input can inclusde special characters spaces and letters", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })

    it("spaces should be maintained throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    })

    it("The alphabet parameter must be a string of exactly 26 characters including special chararcters otherwise return false", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    })
})
