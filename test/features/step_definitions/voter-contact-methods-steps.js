'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will be shown form to enter my contact methods details', function(done){
    browser
      .waitForSelector('.contact-methods-details-form')
      .exists('#emailAddress')
      .then((input) => { assert.ok(input, 'email address missing');})
      .exists('#phoneNumber')
      .then((input) => { assert.ok(input, 'Phone number missing');})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select contact methods Yes', function(done){
    browser
    .click('label[for="shouldContact-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select contact methods No', function(done){
    browser
    .click('label[for="shouldContact-No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select contact methods Skip Question', function(done){
    browser
    .click('label[for="shouldContact-Skip"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I see three contact methods buttons labelled Yes, No and Skip Question', function(done) {
    browser
    .html('label[for="shouldContact-Yes"]')
    .then((button) => { assert.ok(button, 'Selector for Yes missing')})
    .html('label[for="shouldContact-No"]')
    .then((button) => { assert.ok(button, 'Selector for No missing')})
    .html('label[for="shouldContact-Skip"]')
    .then((button) => { assert.ok(button, 'Selector for Skip Section missing')})
    .then(() => { done(); })
    .catch(done);
  });


  world.and('I enter my email', function(done){
    browser
      .type('#emailAddress', 'sample@example.com')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my phone number', function(done){
    browser
      .type('#phoneNumber', '(111) 000-8888')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my contact details in summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('sample@example.com'), 'email not found on summary');
        assert.ok(text.includes('(111) 000-8888'), 'phone number not found on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I did not choose to be contacted', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('No'), 'contact choice as No not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I did not answer to be contacted', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('No Answer'), 'contact choice as Skip Question not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already eneterd my contact details', function(done){
    browser
      .click('a.contact-methods')
      .waitForSelector('.contact-methods-choice-form')
      .click('label[for="shouldContact-Yes"]')
      .type('#emailAddress', 'sample@example.com')
      .type('#phoneNumber', '(111) 000-8888')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my email and phone number', function(done){
    browser
    .value('#emailAddress')
    .then((value) => { assert.equal(value, 'sample@example.com'); })
    .value('#phoneNumber')
    .then((value) => { assert.equal(value, '(111) 000-8888') })
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I update my email and phone number', function(done){
    browser
      .type('#emailAddress', 'example@sample.com')
      .type('#phoneNumber', '(111) 000-9999')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated email and phone number in summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('example@sample.com'), 'email not found on summary');
        assert.ok(text.includes('(111) 000-9999'), 'phone number not found on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
