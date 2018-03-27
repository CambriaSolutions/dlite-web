'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/license-history-rules';

describe('License (card) history rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      isIssued: 'Yes',
      DLIDNumber: '129da1',
      issuedBy: 'State of Georgia',
      month: '09',
      day: '29',
      year: '2010'
    };
    assert.deepEqual(rules.isIssued(props), []);
    assert.deepEqual(rules.DLIDNumber(props), []);
    assert.deepEqual(rules.issuedBy(props), []);
    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('accepts a future year', function() {
    let props = {
      isIssued: 'Yes',
      DLIDNumber: '129da1',
      issuedBy: 'State of Georgia',
      month: '09',
      day: '29',
      year: (new Date().getFullYear() + 2).toString()
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('it is ok for the user to provide only part of a date', function() {
    let props = {
      isIssued: 'Yes',
      DLIDNumber: '',
      issuedBy: '',
      month: '09',
      day: '',
      year: '2014'
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
    assert.deepEqual(rules.isIssued(props), []);
    assert.deepEqual(rules.DLIDNumber(props), []);
    assert.deepEqual(rules.issuedBy(props), []);
  });

  it('gives the licenseHistorySelectionMissing error if user doesn\'t choose radio button', function() {
    let props = {
      isIssued: ''
    };

    assert.deepEqual(rules.isIssued(props), ['errorMessages.licenceHistorySelectionMissing']);
  });

  it('gives the dataIncludesNonEnglishCharacters error if user types in non-English characters', function() {
    let props = {
      isIssued: 'Yes',
      DLIDNumber: 'nie miałam',
      issuedBy: 'twója matka',
      month: '09',
      day: '',
      year: '2014'
    };

    assert.deepEqual(rules.issuedBy(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.DLIDNumber(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
  });

  it('when the day is greater than the number of days in the month, it gives the expirationDateInvalid error', function() {
    let props = {
      isIssued: 'Yes',
      month: '09',
      day: '31',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), ['errorMessages.expirationDateInvalid']);
    assert.deepEqual(rules.year(props), []);
  });

  it('when the date input is not a number it gives the expirationDateInvalid error', function() {
    let props = {
      isIssued: 'Yes',
      month: 'january',
      day: '29',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), ['errorMessages.expirationDateInvalid']);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

});

