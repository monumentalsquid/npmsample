const _ = require('lodash');

const numbers = [2,4,15,16,23,42];

_.each(numbers, function(number, i) {
  console.log(number);
});