// Write your tests here!
const { caesar } = require('../src/caesar.js')
const expect = require('chai').expect

describe("caesar", () => {
    it("if shift is not present should be false", () => {
       const actual =  caesar("thinkful");
       const expected = false;
       expect(actual).to.equal(expected);
    })

    it("if shift = 0, should return false", () => {
        const actual = caesar("thinkful", 0);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("if shift is < -25 should return false", () => {
        const actual = caesar("thinkful", -27);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("if shift is > 25 should return false", () => {
        const actual = caesar("thinkful", 27);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it(`("thinkful", 3) should be: 'wklqnixo`, () => {
        let actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    })

    it(`("thinkful", -3) should be: 'qefkhcri`, () => {
        let actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected)
    })
    
    it(`("thinkful", 3, false) should be: 'thinkful`, () => {
        let actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.equal(expected)
    })

    it(`("This is a secret message!", 8) should be: bpqa qa i amkzmb umaaiom! `, () => {
        let actual = caesar("This is a secret message!", 8);
        let expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected)
    })
    

})
