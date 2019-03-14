const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Only has a provided number of characters between \n characters', () => {
    expect(wrap('This', 2)).to.equal('Th\nis');
  });
  it('Returns an empty string if num is 0', () => {
    expect(wrap('Random string thats smaller than', 0)).to.equal('');
  })
});

