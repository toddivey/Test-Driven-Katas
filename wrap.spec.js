const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Only has a provided number of characters between \n characters', () => {
    expect(wrap('This', 2)).to.equal('Th\nis');
  })
});

