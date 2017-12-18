'use strict'

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select yes to get a senior id', function(done) {
    browser
      .click('label[for="seniorIDYes"]')
      .then( () => { done(); })
      .catch(done);
  });

  world.then('I will see that I have opted for my senior ID', function(done) {
    browser
      .text('.senior-section')
      .then( text => {
        assert(text.includes('Senior ID: Yes'), 'does not show Senior ID: Yes')
      })
      .then( () => { done(); })
      .catch( done );
  });

  world.and('I select no to not get a senior id', function(done) {
    browser
      .click('label[for="seniorIDNo"]')
      .then( () => { done(); })
      .catch(done);
  });
};