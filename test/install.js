const debug = require('micro-debug')('test:install');
const spawn = require('child_process').spawn;
function bash (name) {
  let cmds = [];

  let suite = {};
  suite.sh = (cmd) => {
    cmds.push(cmd);
    return suite;
  };

  debug('Define %s suite', name);

  // define the mocha "it" case
  it(name, function (done) {
    // wait for next tick, to let sh calls add cmds (if on next statements)
    process.nextTick(() => {
      debug('Cmds:', cmds);
      setTimeout(() => {
        debug('done');
        done();
      }, 200);
    });
  });

  return suite;
}

describe('prometheus prebuilt', () => {
  describe('downloads tgz on install', () => {
    bash('it creates platform dir')
      .sh('ls dist')
      .sh('foobar');
  });
});
