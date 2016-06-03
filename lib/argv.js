
// options parser: https://github.com/mklabs/140-opts#code
module.exports = function argv(a) {
  return a
    .map(function (c, d) {
      return {
        n: c.match(/^--?(.+)/),
        v: a[d+1]||!0
      };
    })
    .reduce(function (a, b) {
      b.n&&(a[b.n[1]]=b.v);
      return a;
    }, {})
};
