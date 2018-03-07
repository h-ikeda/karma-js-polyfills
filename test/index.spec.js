const jsPolyfills = require('../')['framework:js-polyfills'][1];
const { expect } = require('chai');

describe('framework:js-polyfills', function suite() {
  it('should add polyfill.js without config', function test() {
    const files = [];
    jsPolyfills(files);
    expect(files).lengthOf(1);
    expect(files[0]).to.have.property('pattern', require.resolve('js-polyfills'));
  });
  it('should add polyfill.js without option', function test() {
    const files = [];
    jsPolyfills(files, {});
    expect(files).lengthOf(1);
    expect(files[0]).to.have.property('pattern', require.resolve('js-polyfills'));
  });
  it('should add polyfill.js with empty option', function test() {
    const files = [];
    jsPolyfills(files, { jsPolyfills: [] });
    expect(files).lengthOf(1);
    expect(files[0]).to.have.property('pattern', require.resolve('js-polyfills'));
  });
  it('should add files specified by option', function test() {
    const files = [];
    jsPolyfills(files, { jsPolyfills: ['typedarray', 'timing', 'xhr'] });
    expect(files).lengthOf(3);
    expect(files[0]).to.have.property('pattern', require.resolve('js-polyfills/xhr.js'));
    expect(files[1]).to.have.property('pattern', require.resolve('js-polyfills/timing.js'));
    expect(files[2]).to.have.property('pattern', require.resolve('js-polyfills/typedarray.js'));
  });
});
