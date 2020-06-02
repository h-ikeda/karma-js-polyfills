module.exports = function(config) {
  config.set({
    browsers: ['IE'],
    frameworks: ['mocha', 'chai', 'js-polyfills'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      require('./index.js'),
    ],
    files: ['test/integration_test.spec.js'],
    singleRun: true,
    client: {
      mocha: {
        fgrep: 'Karma test with polyfills',
      },
    },
  });
};
