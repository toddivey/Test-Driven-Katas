const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if no numbers equal the sum', () => {
    expect(twoSum([1,2,4], 8)).to.be.an('array').to.have.lengthOf(0);
  })
  it('Returns empty array if no numbers equal the sum', () => {
    expect(twoSum([1,2,4], 3)).to.equal([0,1]);
  })
})


