var path = require('path');
var prebuilt = require('..');

var os = prebuilt.platform();
var opts = prebuilt.argv(process.argv.slice(2));
var version = opts.version || process.env.npm_config_version;

prebuilt.debug('Installing prometheus (https://prometheus.io/)');
prebuilt.debug('>> %s version on %s platform', version || 'latest', os);
var install = version ? prebuilt.version(version) : prebuilt.latest();

install.then(function () {
  prebuilt.debug('Installed in %s directory', path.join(__dirname, '../dist'));
  prebuilt.debug('>> binary: %s', path.join(__dirname, '..', prebuilt.path()));
  process.exit(0);
});

install.catch(function(err) {
  console.error('ERR', err);
  process.exit(err.code || 2);
});

