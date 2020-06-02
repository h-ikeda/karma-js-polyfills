describe('Karma test with polyfills', function suite() {
  it('Object.entries() should be able to be called', function test() {
    expect(Object.entries({a: 1, b: 2})).to.deep.equal([['a', 1], ['b', 2]]);
  });
});

describe('Karma test without polyfills', function suite() {
  it('Object.entries() should not be able to be called', function test() {
    expect(() => Object.entries({a: 1, b: 2})).to.throw(ReferenceError);
  });
});
