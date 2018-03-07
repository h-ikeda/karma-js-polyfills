# karma-js-polyfills

[js-polyfills](https://www.npmjs.com/package/js-polyfills) for [karma](https://www.npmjs.com/package/karma).

## Usage

### Install

```bash
npm install --save-dev karma-js-polyfills
```

### Simple usage

Add `js-polyfills` to the frameworks in your karma configuration.

```js
module.exports = config => {
  config.set({

    // ...

    frameworks: ['mocha', 'chai', 'js-polyfills'],

    // ...

  });
};
```

### Configuration

Without configuration, this plugin inject `polyfill.js`, which is main file of the [js-polyfills](https://www.npmjs.com/package/js-polyfills).

To customize the injected file list, Add an array of polyfill names as `jsPolyfills` key to your karma configuration.

```js
module.exports = config => {
  config.set({

    // ...

    jsPolyfills: ['typedarray', 'timing'],

    // ...

  });
};
```

Then, `typedarray.js` and `timing.js` will be enabled.
