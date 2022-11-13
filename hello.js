const cowsay = require("cowsay");
var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "oO",
    T : "U "
}));

