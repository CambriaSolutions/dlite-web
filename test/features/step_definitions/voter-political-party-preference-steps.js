'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see buttons for each political party', function(done){
    browser
      .html('label[for="American Independent Party"]')
      .then((button) => { assert.ok(button, 'Selector for American Independent Party missing')})
      .html('label[for="Libertarian Party"]')
      .then((button) => { assert.ok(button, 'Selector for Libertarian Party missing')})
      .html('label[for="Democratic Party"]')
      .then((button) => { assert.ok(button, 'Selector for Democratic Party missing')})
      .html('label[for="Green Party"]')
      .then((button) => { assert.ok(button, 'Selector for Green Party missing')})
      .html('label[for="Peace and Freedom Party"]')
      .then((button) => { assert.ok(button, 'Selector for Peace and Freedom Party missing')})
      .html('label[for="Republican Party"]')
      .then((button) => { assert.ok(button, 'Selector for Republican Party missing')})
      .html('label[for="Other"]')
      .then((button) => { assert.ok(button, 'Selector for Other missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select a political party button', function(done){
    browser
      .click('label[for="Libertarian Party"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my political party in summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Libertarian Party'), 'Political party preference not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my my political party selected', function(done){
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Libertarian Party'); })
      .then(() => { done(); })
      .catch(done);
  })

  world.when('I change my political party', function(done){
    browser
    .click('label[for="Peace and Freedom Party"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my political party updated in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Peace and Freedom Party'), 'Political party preference not updated in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });
};