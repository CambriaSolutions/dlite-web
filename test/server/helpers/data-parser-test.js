'use strict';

const assert            = require('assert');
const dataParser        = require('../../../server/helpers/data-parser');

describe('dataParser', function() {

  describe('parseParty', function() {
    it('returns the selected party that has been saved to politicalPartyChoose', function() {
      let obj = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Peace and Freedom Party',
        otherParty: ''
      };
      assert.equal(dataParser.parseParty(obj), 'Peace and Freedom Party');
    });

    it('returns the other party that has been typed in', function() {
      let obj = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Other',
        otherParty: 'Oprah'
      };
      assert.equal(dataParser.parseParty(obj), 'Oprah');
    });
  });

  describe('stringToBool', function() {
    it('returns null when data equals "decline"', function() {
      let val = 'decline';
      assert.equal(dataParser.strToBool(val), 'decline');
    });

    it('returns false when data equals "No"', function(){
      let val = 'No';
      assert.equal(dataParser.strToBool(val), false);
    });

    it('returns true when data equals "Yes"', function() {
      let val = 'Yes';
      assert.equal(dataParser.strToBool(val), true);
    });
  });

  describe('boolToStr', function() {
    it('returns "decline" when data equals "decline"', function() {
      let val = "decline";
      assert.equal(dataParser.boolToStr(val), 'decline');
    });

    it('returns "No" when data is false', function() {
      let val = false;
      assert.equal(dataParser.boolToStr(val), 'No');
    });

    it('returns "Yes" when data is true', function() {
      let val = true;
      assert.equal(dataParser.boolToStr(val), 'Yes');
    });
  });

  describe('blankIsDecline', function() {
    it('returns the same value when a user does not select an answer as when the user declines to answer', function() {
      let val = '';
      assert.equal(dataParser.blankIsDecline(val), 'decline');
      assert.equal(dataParser.blankIsDecline(val), dataParser.strToBool('decline'));
    });

    it('returns a boolean when the user does select an answer', function() {
      let val = 'Yes';
      assert.equal(dataParser.blankIsDecline(val), true);
      assert.equal(dataParser.blankIsDecline(val), dataParser.strToBool(val));
    });
  });

  describe('createDateString', function() {
    it('returns null when date object does not have all values', function() {
      let date = {
        month: 12,
        year: '',
        day: 24
      };
      assert.equal(dataParser.createDateString(date), null);
    });

    it('returns string when date object has all values', function() {
      let date = {
        month: 12,
        year: 2004,
        day: 24
      };
      assert.equal(dataParser.createDateString(date), '12/24/2004');
    });
  });

  describe('createDateJson', function() {
    it('returns empty values when date string is not correct', function() {
      let date = '12/2004'
      assert.deepEqual(
        dataParser.createDateJson(date),
        {
          month:  '',
          day:    '',
          year:   ''
        }
      );
    });

    it('returns proper json with all values when date string is correct', function() {
      let date = '12/24/2004'
      assert.deepEqual(
        dataParser.createDateJson(date),
        {
          month:  '12',
          day:    '24',
          year:   '2004'
        }
      );
    });
  });

});
