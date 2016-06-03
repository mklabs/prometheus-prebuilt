var os     = require('os');
var path   = require('path');
var format = require('util').format;
var request = require('request');
var debug = require('debug')('prometheus:fetch');

var gunzip  = require('gunzip-maybe');
var tarstream = require('tar-stream');
var tar = require('tar-fs');

module.exports = function fetch (url) {
  var dist = path.join(__dirname, '../dist');
  return new Promise((r, errback) => {
    // couldnt get the followRedirect option working with the got stream api :/
    debug('Download %s', url);
    return request(url)
      .pipe(gunzip())
      .pipe(tar.extract(dist))
      .on('finish', () => r(dist))
      .on('error', errback);
  });
};
