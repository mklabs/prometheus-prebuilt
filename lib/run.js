var path     = require('path');
var spawn    = require('child_process').spawn;
var exists   = require('fs').existsSync;
var prebuilt = require('./');

module.exports = function run (argv, opts) {
  var bin = prebuilt.path();
  opts.stdio = opts.stdio || 'inherit';
  if (!exists(bin)) throw new Error('Couldnt find ' + bin);
  if (!exists(path.resolve('prometheus.yml'))) {
    opts.cwd = opts.cwd || path.dirname(bin);
  }

  return spawn(bin, argv, opts);
};
