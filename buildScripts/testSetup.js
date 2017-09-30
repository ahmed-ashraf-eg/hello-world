// This File isn't transpiled, so must use CommonJS & ES5

// Register babelto transpile before our tests run.
require('babel-register')();

// Disabled webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
