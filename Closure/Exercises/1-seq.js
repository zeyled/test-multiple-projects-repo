'use strict';

const seq = (f) => (g) => (
  typeof g === 'number' ?
  g(x) : seq(x => f(g(x)))
);

module.exports = { seq };
