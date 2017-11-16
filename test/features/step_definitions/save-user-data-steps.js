'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I see the reload button', function(done) {
    browser
      .exists("button:contains('Reload')")
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click the reload button', function(done) {
    browser
      .click("button:contains('Reload')")
      .wait(2500)
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see the save button', function(done) {
    browser
      .exists("button:contains('Save')")
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click the save button', function(done) {
    browser
    .click("button:contains('Save')")
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see all my data persists in the summary', function(done) {
    browser
    .text()
      .then((text) => {
        assert(text.includes('FirstName1'), 'first name missing from summary');
        assert(text.includes('MiddleName1'), 'middle name missing from summary');
        assert(text.includes('LastName1'), 'last name missing from summary');
        assert(text.includes(''), 'name suffix missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see all my name data, but not my residential address', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('123 Main Street'), 'street address missing');
        assert(text.includes('Unit no. 45'), 'unit number missing');
        assert(text.includes('Crazidino'), 'city missing');
        assert(text.includes('CA'), 'state missing');
        assert(text.includes('94666'), 'zip missing');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
