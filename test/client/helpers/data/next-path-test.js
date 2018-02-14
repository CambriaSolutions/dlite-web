'use strict';

const assert = require('assert');

import {
  chooseCardType,
  currentCardInfo,
  updateAndCorrect,
  replacementDetails,
  realID,
  chooseLicenseClass,
  socialSecurity,
  medicalHistory,
  nameHistory,
  summary
} from '../../../../client/helpers/data/next-path';

const today = new Date();
const bothCards = {
  cardAction: 'new',
  cardType: ['ID', 'DL'],
  IDApp: {
    isApplying: true,
    action: 'new',
    reducedFee: {
      ID: ''
    }
  },
  DLApp: {
    isApplying: true,
    action: 'new'
  },
  dateOfBirth: {
    year: (today.getFullYear() - 40).toString(),
    month: (today.getMonth()).toString(),
    day: today.getDate().toString()
  }
};

function buildCardType(type, action){
  let state = {
    cardType: [type],
    cardAction: action,
    IDApp: {
      isApplying: false,
      action: ''
    },
    DLApp: {
      isApplying: false,
      action: ''
    },
    dateOfBirth: {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    }
  };
  if (type === 'DL') {
    state.DLApp.isApplying = true;
    state.DLApp.action = action;
  }
  if (type === 'ID') {
    state.IDApp.isApplying = true;
    state.IDApp.action = action;
  }
  return state;
};

const seniorYear = (today) => {
  return (today.getFullYear() - 65).toString()
};

describe('Data helpers for determining next path from current page and props', function() {
  let data;
  beforeEach(function() {
    data = buildCardType('', '');
    data.dateOfBirth = {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    };
  });
  describe('#getStarted section', function() {
    describe('##chooseCardType', function() {

      it('if senior customer has existing card it will navigate to the existing card page', function() {
        data = buildCardType('ID', 'renew');
        data.dateOfBirth.year = seniorYear(today);
        assert.equal(chooseCardType(data), 'currentCardInfo');
      });

      it('if too young for a DL diverts to the youth notifcation page', function() {
        data = buildCardType('DL', 'new');
        data.dateOfBirth.year =(today.getFullYear() - 15).toString();

        assert.equal(chooseCardType(data), 'youthIDInstead');
      });

      it('if applying for a new ID and a senior', function() {
        data = buildCardType('ID', 'new');
        data.dateOfBirth.year = seniorYear(today);
        assert.equal(chooseCardType(data), 'seniorID');
      });

      it('if applying for a new DL, will go to real id', function() {
        data = buildCardType('DL', 'new');
        assert.equal(chooseCardType(data), 'realID');
      });
    });

    describe('##replacementDetails', function() {
      it('takes seniors replacing a DL to the realID page', function() {
        data = buildCardType('DL', 'replace');
        data.dateOfBirth.year = seniorYear(today);

        assert.equal(replacementDetails(data), 'realID');
      });

      it('takes seniors replacing an ID to the seniorID page', function(){
        data = buildCardType('ID', 'replace');
        data.dateOfBirth.year = seniorYear(today);

        assert.equal(replacementDetails(data), 'seniorID');
      });

      it('takes not-yet-seniors to the realID page', function() {
        data = buildCardType('DL', 'replace');
        data.dateOfBirth.year = (today.getFullYear() - 30).toString();

        assert.equal(replacementDetails(data), 'realID');
      });
    });

    describe('##currentCardInfo', function() {
      it('if applying for an ID and a senior', function() {
        data = buildCardType('ID', 'renew');
        data.dateOfBirth.year = seniorYear(today);

        assert.equal(currentCardInfo(data), 'seniorID');
      });

      it('if not eligible for senior id moves to real id', function() {
        data = buildCardType('DL', 'renew');
        data.dateOfBirth.year = seniorYear(today);
        assert.equal(currentCardInfo(data), 'realID');
      });
    });

    describe('#updateAndCorrect', function() {
      it('goes to seniorID page if user is senior updating an ID', function() {
        data = buildCardType('ID', 'change');
        data.dateOfBirth.year = seniorYear(today);
        data.IDApp.cardChanges = {
          correctOrUpdate: 'update',
          sections: ['name']
        };
        assert.equal(updateAndCorrect(data), 'seniorID');
      });
      it('otherwise goes to realID page', function() {
        assert.equal(updateAndCorrect(data), 'realID');
      });
    });

    describe('##realID', function() {
      it('when getting a DL, it goes to the page for choosing a class', function() {
        data = buildCardType('DL', 'renew');
        assert.equal(realID(data), 'chooseLicenseClass');
      });

      it('if eligible for a reduced fee, it goes to that page', function() {
        data = buildCardType('ID', 'renew');
        assert.equal(realID(data), 'reducedFeeID');
      });

      it('goes to get started in other cases', function() {
        data = buildCardType('ID', 'renew');
        data.dateOfBirth.year = seniorYear(today);
        data.IDApp.seniorID = 'Yes';
        assert.equal(realID(data), 'getStarted');
      });
    });

    describe('#chooseLicenseClass', function() {
      it('if eligible for a reduced fee, it goes to that page', function() {
        data = bothCards;
        data.IDApp.reducedFee.ID = 'Yes';
        assert.equal(chooseLicenseClass(data), 'reducedFeeID');
      });

      it('goes to get started in other cases', function() {
        data = bothCards;
        data.dateOfBirth.year = seniorYear(today);
        data.IDApp.seniorID = 'Yes';

        assert.equal(chooseLicenseClass(data), 'getStarted');
      });
    });
  });

  describe('#myBasics section', function() {
    describe('#socialSecurity', function() {
      it('goes to medicalHistory page if user is replacing a DL', function() {
        data = buildCardType('DL', 'replace');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to medicalHistory page if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to cardHistory, skipping medicalHistory, if user is getting a new ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(socialSecurity(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping medicalHistory and cardHistory, if user is replacing an ID', function() {
        data = buildCardType('ID', 'replace');
        assert.equal(socialSecurity(data), 'nameHistory');
      });
    });
  });

  describe('#myHistory section', function() {
    describe('#medicalHistory', function() {
      it('goes to cardHistory if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');

        assert.equal(medicalHistory(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is changing an existing DL', function() {
        data = buildCardType('DL', 'replace');

        assert.equal(medicalHistory(data), 'nameHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is getting a new ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(medicalHistory(data), 'nameHistory');
      });
    });

    describe('#nameHistory', function() {
      it('goes to licenseIssues if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to licenseIssues page if user is getting a DL that is not new', function() {
        data = buildCardType('DL', 'change');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to veterans page if user is getting an ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(nameHistory(data), 'veterans');
      });
    });
  });

  describe('#organDonation section', function() {

  });

  describe('#voterRegistration', function() {

  });

  describe('#conclusion section', function() {
    describe('#summary', function() {
      it('goes to application prep page if server apiStatus is successful', function() {
        let res = 'success'
        assert.equal(summary(res), 'appointmentPreparation');
      });
      it('goes to summary page if server apiStatus is unsuccessful', function() {
        let res = 'api-fail'
        assert.equal(summary(res), 'summary');
      });
    });
  });
});

