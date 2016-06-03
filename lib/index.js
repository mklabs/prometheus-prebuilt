process.env.DEBUG = process.env.DEBUG || 'prometheus*';

var gh   = require('gh-got');
var fmt  = require('util').format;
var path = require('path');

var prebuilt = module.exports = require('../package.json').config;
prebuilt.debug = require('debug')('prometheus:prebuilt');

prebuilt.platform = function () {
  var os = process.env.npm_config_os || require('os').platform();
  if (os === 'win32') return 'windows';
  if (os === 'freebsd') return 'linux';
  return os;
};

prebuilt.path = function (platform) {
  platform = platform || prebuilt.platform();
  var bin = prebuilt.paths[platform];
  if (!bin) throw new Error('Unknown platform: ' + platform);
  return path.join(__dirname, '..', bin);
};

prebuilt.url = function (version, platform) {
  var os = prebuilt.platform();
  var url = 'https://github.com/prometheus/prometheus/releases/download/';
  url += fmt('%s/prometheus-%s.%s-amd64.tar.gz', version, version, os);
  return url;
};

prebuilt.release = function (version) {
  version = version || 'latest';
  return gh('repos/prometheus/prometheus/releases/' + version)
    .then(function (res) { return res.body; });
};

prebuilt.version = function version () {
  var url = prebuilt.url(version)
  return prebuilt.fetch(url);
};

prebuilt.latest = function latest () {
  return prebuilt.release()
    .then(function (res) {
      var version = res.tag_name;
      var assets = res.assets;
      var platform = prebuilt.platform();
      var asset = assets.find(function(asset) {
        return asset.name.indexOf(platform) !== -1;
      });

      if (!asset) return console.error('Couldnt find asset for platform', platform);
      return prebuilt.fetch(asset.browser_download_url);
   });
}

prebuilt.run = require('./run');
prebuilt.argv = require('./argv');
prebuilt.fetch = require('./fetch');
