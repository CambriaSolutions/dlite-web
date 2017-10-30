'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see select buttons for Blue, Gray, Green, Hazel and Brown', function(done) {
    browser
      .html('label[for="eyeColorBlue"]')
      .then((button) => { assert.ok(button, 'Selector for Blue eye color missing')})
      .html('label[for="eyeColorGray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray eye color missing')})
      .html('label[for="eyeColorGreen"]')
      .then((button) => { assert.ok(button, 'Selector for Green eye color missing')})
      .html('label[for="eyeColorHazel"]')
      .then((button) => { assert.ok(button, 'Selector for Hazel eye color missing')})
      .html('label[for="eyeColorBrown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown eye color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my eye color', function(done){
    browser
      .click('a.eye-color')
      .click('label[for="eyeColorBlue"]')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select an eye color', function(done){
    browser
      .click('label[for="eyeColorBlue"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the eye color I chose is selected', function(done){
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Blue'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my eye color', function(done){
    browser
      .click('label[for="eyeColorBrown"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my eye color in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Blue'), 'Eye color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated eye color in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Brown'), 'Eye color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
