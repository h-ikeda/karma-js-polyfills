function framework(files, config) {
  if (config && config.jsPolyfills) {
    if (!Array.isArray(config.jsPolyfills)) throw new TypeError('The value of jsPolyfills must be an array.');
    if (config.jsPolyfills.length) {
      config.jsPolyfills.forEach(name => {
        files.unshift({ pattern: require.resolve('js-polyfills/' + name + '.js')});
      });
      return;
    }
  }
  files.unshift({ pattern: require.resolve('js-polyfills'), watched: false });
}
framework.$inject = ['config.files', 'config'];

module.exports = { 'framework:js-polyfills': ['factory', framework] };
