'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for intro render', function (done) {
    browser
      .waitForSelector('.intro-info')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};