'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  function validate(message, done) {
    browser
      .click('.forward')
      .waitForSelector('.error')
      .text()
      .then((text) => {
        assert.ok(text.includes(message))
      })
      .then(done)
      .catch(done);
  };



  world.when('I click to add an ID', function(done) {
    browser
      .click('.wdywtdt.ID')
      .then(done)
      .catch(done);
  });

  world.when('I click to add a DL', function(done) {
    browser
      .click('.wdywtdt.DL')
      .then(done)
      .catch(done);
  });

  world.then('I will see a WDYWTDT page with only the new DL option', function(done) {
    browser
      .waitForSelector('.choose-card-action')
      .text()
      .then((text) => {
        assert.ok(text.includes('Get a driver license for the first time'), 'DL text not on page');
        assert.ok(!text.includes('Get a card for the first time'), 'generic wdywtdt today language on page');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see a WDYWTDT page with the new ID option', function(done) {
    browser
      .waitForSelector('.choose-card-action')
      .text()
      .then((text) => {
        assert.ok(text.includes('Get an ID card for the first time'), 'ID-specific text not on page');
        assert.ok(!text.includes('Get a card for the first time'), 'generic wdywtd today language on page');
      })
      .then(done)
      .catch(done);
  });

  world.when('I will see that the validations work the same as the WDYWTDT page', function(done) {
    validate('Please select what you want to do', done);
  });

  world.then('I will see that the page looks the same as the normal license type page', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('What do you need to drive?'));
        assert.ok(text.includes("Car"));
      })
      .then(done)
      .catch(done);
  });

  world.and('I will see that the validations work the same as the normal license type page', function(done) {
    validate('Please select what you need to drive', done);
  });

  world.then('I will see that the page looks like the current medical history page', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Have you had any medical conditions in the last three years that affected your ability to drive?'));
        assert.ok(text.includes("Yes"));
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that the page validations behave the same as the current medical history page', function(done){
    validate('Please make a selection', done);
  });

  world.then('I will see a page that looks and acts like the existing DL license and ID history page', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Have you ever had a driver license or state-issued ID card?'));
      })
      .then(done)
      .catch(done);
  });

  world.and('I will not see a card history section', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(!text.includes('Previous DL/ID card number:'), 'card history section rendered');
      })
      .then(done)
      .catch(done);
  });

};
