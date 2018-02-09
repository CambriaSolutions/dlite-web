'use strict';
const assert = require('assert');

import {
  licenseAndIdIssued,
  licenseIssuesIsSuspended,
  hasMedical,
  hasUsedPreviousNames,
  getStringByMedical,
  getStringByPreviousNames
} from '../../../../client/helpers/data/my-history';

describe('Data helpers for my-history data', function() {
  describe('#licenseAndIdIssued', function() {
    let props = {
      licenseAndIdHistory: { isIssued: ''}
    };
    it('is true when value equals Yes', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      assert.equal(licenseAndIdIssued(props), true);
    });

    it('is false when value equals No', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(licenseAndIdIssued(props), false);
    });
    it('is false when value is blank', function() {
      props.licenseAndIdHistory.isIssued = '';
      assert.equal(licenseAndIdIssued(props), false);
    });
  });

  describe('#licenseIssuesIsSuspended', function() {
    let props = {
      licenseIssues: {
        isSuspended: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.licenseIssues.isSuspended = 'Yes';
      assert.equal(licenseIssuesIsSuspended(props), true);
    });
    it('is false when value equals No', function() {
      props.licenseIssues.isSuspended = 'No';
      assert.equal(licenseIssuesIsSuspended(props), false);
    });
    it('is false when value is blank', function() {
      props.licenseIssues.isSuspended = '';
      assert.equal(licenseIssuesIsSuspended(props), false);
    });
  });

  describe('#hasMedical', function() {
    let props = {
      medicalHistory: {
        hasMedicalCondition: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.medicalHistory.hasMedicalCondition = 'Yes';
      assert.equal(hasMedical(props), true);
    });
    it('is false when value equals No', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      assert.equal(hasMedical(props), false);
    });
    it('is false when value is blank', function() {
      props.medicalHistory.hasMedicalCondition = '';
      assert.equal(hasMedical(props), false);
    });
  });

  describe('#hasUsedPreviousNames', function() {
    let props = {
      namesHistory: {
        hasUsedPreviousNames: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.namesHistory.hasUsedPreviousNames = 'Yes';
      assert.equal(hasUsedPreviousNames(props), true);
    });
    it('is false when value equals No', function() {
      props.namesHistory.hasUsedPreviousNames = 'No';
      assert.equal(hasUsedPreviousNames(props), false);
    });
    it('is false when value is blank', function() {
      props.namesHistory.hasUsedPreviousNames = '';
      assert.equal(hasUsedPreviousNames(props), false);
    });
  });

  describe('#getStringByMedical', function() {
    let props;
    let medicalInfo = 'test';
    beforeEach(function() {
      props = {
        medicalHistory: {
          medicalInfo: '',
          hasMedicalCondition: ''
        }
      };
    });

    it('returns medicalInfo is user indicated they have a condition', function() {
      props.medicalHistory.hasMedicalCondition = 'Yes';
      props.medicalHistory.medicalInfo = medicalInfo;
      assert.equal(getStringByMedical(props), medicalInfo);
    });

    it('returns "None" if user has indicated they do not have a condition', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      props.medicalHistory.medicalInfo = medicalInfo;
      assert.equal(getStringByMedical(props), "None");
    });
  });

  describe('#getStringByPreviousNames', function() {
    let props;
    let previousNames = 'that one, and that one';
    beforeEach(function() {
      props = {
        namesHistory: {
          hasUsedPreviousNames: '',
          previousNames: ''
        }
      };
    });

    it('returns previous names if user has indicated they have used previous names', function() {
      props.namesHistory.hasUsedPreviousNames = 'Yes';
      props.namesHistory.previousNames = previousNames;
      assert.equal(getStringByPreviousNames(props), previousNames);
    });
    it('returns "None" if user has indicated they do not have a condition', function() {
      props.namesHistory.hasUsedPreviousNames = 'No';
      assert.equal(getStringByPreviousNames(props), 'None');
    });
  });
});