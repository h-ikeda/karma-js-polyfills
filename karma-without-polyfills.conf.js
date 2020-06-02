module.exports = function(config) {
  config.set({
    browsers: ['IE'],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-ie-launcher',
    ],
    files: ['test/integration_test.spec.js'],
    singleRun: true,
    client: {
      mocha: {
        fgrep: 'Karma test without polyfills',
      },
    },
  });
};
