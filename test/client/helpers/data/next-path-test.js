'use strict';

const assert = require('assert');

import {
  chooseCardType,
  currentCardInfo,
  realID,
  chooseLicenseClass
} from '../../../../client/helpers/data/next-path';

describe('Data helpers for determining next path from current page and props', function() {
  describe('#chooseCardType', function() {
    it('if customer has existing card it will navigate to the existing card page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          renew: 'ID'
        },
        cardAction: 'renew'
      };

      assert.equal(chooseCardType(data), 'currentCardInfo');
    });

    it('if too young for a DL diverts to the youth notifcation page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 15).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['DL']
        },
        cardAction: 'new'
      };

      assert.equal(chooseCardType(data), 'youthDlMessage');
    });

    it('if applying for an ID and a senior', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID']
        },
        cardAction: 'new'
      };
      assert.equal(chooseCardType(data), 'seniorID');
    });

    it('if applying for a new DL, will go to real id', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['DL']
        },
        cardAction: 'new'
      };
      assert.equal(chooseCardType(data), 'realID');
    });
  });

  describe('#currentCardInfo', function() {
    it('if applying for an ID and a senior', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'ID'
        },
        cardAction: 'renew'
      };
      assert.equal(currentCardInfo(data), 'seniorID');
    });

    it('if not eligible for senior id moves to real id', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'DL'
        },
        cardAction: 'renew'
      };
      assert.equal(currentCardInfo(data), 'realID');
    });
  });

  describe('#realID', function() {
    it('when getting a DL, it goes to the page for choosing a class', function() {
      let data = {
        cardType: {
          new: [],
          renew: 'DL'
        },
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'chooseLicenseClass');
    });

    it('if eligible for a reduced fee, it goes to that page', function() {
      let data = {
        cardType: {
          new: [],
          renew: 'ID'
        },
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'reducedFeeID');
    });

    it('goes to get started in other cases', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'ID',
        },
        seniorID: 'Yes',
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'getStarted');
    });
  });

  describe('#chooseLicenseClass', function() {
    it('if eligible for a reduced fee, it goes to that page', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        },
        cardAction: 'new'
      };
      assert.equal(chooseLicenseClass(data), 'reducedFeeID');
    });

    it('goes to get started in other cases', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID', 'DL'],
          renew: '',
        },
        seniorID: 'Yes',
        cardAction: 'new'
      };
      assert.equal(chooseLicenseClass(data), 'getStarted');
    });
  });
});

