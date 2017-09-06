'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see buttons for Auburn, Bald, Black, Blonde, Brown, Gray, Red, White and Other', function (done) {
    browser
      .html('label[for="Auburn"]')
      .then((button) => { assert.ok(button, 'Selector for Auburn hair color missing')})
      .html('label[for="Bald"]')
      .then((button) => { assert.ok(button, 'Selector for Bald hair color missing')})
      .html('label[for="Black"]')
      .then((button) => { assert.ok(button, 'Selector for Black hair color missing')})
      .html('label[for="Blonde"]')
      .then((button) => { assert.ok(button, 'Selector for Blonde hair color missing')})
      .html('label[for="Brown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown hair color missing')})
      .html('label[for="Gray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray hair color missing')})
      .html('label[for="Red"]')
      .then((button) => { assert.ok(button, 'Selector for Red hair color missing')})
      .html('label[for="White"]')
      .then((button) => { assert.ok(button, 'Selector for White hair color missing')})
      .html('label[for="Other"]')
      .then((button) => { assert.ok(button, 'Selector for Other hair color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select a hair color', function (done) {
    browser
      .click('label[for="Auburn"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my hair color is on that summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Auburn'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my hair color into the form', function (done) {
    browser
      .click('a.appearance-hair')
      .waitForSelector('.hair-color-form')
      .click('label[for="Auburn"]')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the hair color I selected', function (done) {
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Auburn'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select another hair color', function (done) {
    browser
      .click('label[for="Red"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see that color selected', function (done) {
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Red'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I realize I made the wrong selection and change it', function (done) {
    browser
      .click('label[for="Other"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the original selection as not highlighted', function (done) {
    browser
      .text('.button.selected')
      .then((color) => { assert.ok(color !== 'Red', 'Original color selected'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the new selection has been highlighted', function (done) {
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Other'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my hair color selection', function (done) {
    browser
      .click('label[for="Bald"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated hair color', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Bald'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
