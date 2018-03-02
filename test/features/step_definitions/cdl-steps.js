'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select a commercial DL application', function(done) {
    browser
      .click('label[for="chooseApplication-cdl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a regular ID or DL application', function(done) {
    browser
      .click('label[for="chooseApplication-iddl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a new commercial DL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -new"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a renewal CDL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -renew"]')
      .then(done)
      .catch(done);
  });

  world.when('I select to change my CDL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -change"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to Update my CDL', function(done) {
    browser
      .click('label[for="correctOrUpdate-update"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to change my name section', function(done) {
    browser
      .click('label[for="name"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am applying for a new CDL', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for the first time'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am renewing my card', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('I amRenewing'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am updating my card', function(done) {
    browser
      .text()
      .then(text=> {
        assert.ok(text.includes('I amUpdating'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my current CDL number', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('CDL number:DMV2000'));
      })
      .then(() => { done(); })
      .catch(done);
  });


  world.and('I will see the title of each accordion for cdl what can I do page', function(done) {
    browser
      .waitForSelector('#apply-cdl')
      .then((d) => { done(); })
      .catch(done);
  });

  world.when('I click in the title for cdl what can I do accordion', function(done) {
    browser
      .click('#apply-cdl')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The cdl what can I do info accordion will open to show its full content', function(done) {
    browser
      .attribute('#apply-cdl-accordion', 'class')
      .then((className) => {
        assert(className.includes('open'), 'Accordion for cdl what can i do did not open');
      })
      .then(done)
      .catch(done);
  });

  world.when('I click Yes to being a resident', function(done) {
    browser
      .click('label[for="isResident-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click No to being a resident', function(done) {
    browser
      .click('label[for="isResident-No"]')
      .then(done)
      .catch(done);
  });
};
