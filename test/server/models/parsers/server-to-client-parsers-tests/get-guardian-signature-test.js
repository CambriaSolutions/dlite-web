'use strict';

const assert                  = require('assert');
const getGuardianSignature    = require('../../../../../server/models/parsers/server-to-client-parsers/get-guardian-signature');

describe('extracting IDDL card type', function() {
  let guardian_signature;
  beforeEach(function() {
    guardian_signature = {
      application_id: '',
      is_signed: '',
      guardian_0: '',
      guardian_0_name: '',
      guardian_0_date: '',
      guardian_0_phone: '',
      guardian_0_address_1: '',
      guardian_0_address_2: '',
      guardian_0_address_city: '',
      guardian_0_address_state: '',
      guardian_0_address_zip: '',
      guardian_1: '',
      guardian_1_name: '',
      guardian_1_date: '',
      guardian_1_phone: '',
      guardian_1_address_1: '',
      guardian_1_address_2: '',
      guardian_1_address_city: '',
      guardian_1_address_state: '',
      guardian_1_address_zip: ''
    };
  });

  it('returns placeholder if table does not exist', function() {
    guardian_signature = undefined;
    assert.equal(getGuardianSignature(guardian_signature).isSigned, '');
  });

  it('gets is_signed', function() {
    guardian_signature.is_signed = 'signAtDMV';
    assert.equal(getGuardianSignature(guardian_signature).isSigned, 'signAtDMV');
  });
  it('gets guardian_0 accept liabilities', function() {
    guardian_signature.guardian_0 = true;
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].acceptLiabilities, true);
  });
  it('gets guardian_0 signature date', function() {
    guardian_signature.guardian_0_date = '10/10/2010';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].signature.month, '10');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].signature.day, '10');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].signature.year, '2010');
  });
  it('gets guardian_0 signature name', function() {
    guardian_signature.guardian_0_name = 'a guardian name';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].signature.name, 'a guardian name');
  });
  it('gets guardian_0 address', function() {
    guardian_signature.guardian_0_address_1 = 'street address';
    guardian_signature.guardian_0_address_2 = '';
    guardian_signature.guardian_0_address_city = 'some city';
    guardian_signature.guardian_0_address_state = 'PA';
    guardian_signature.guardian_0_address_zip = '88888';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.street_1, 'street address');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.street_2, '');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.city, 'some city');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.state, 'PA');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.zip, '88888');
  });

  it('gets guardian_1 accept liabilities', function() {
    guardian_signature.guardian_1 = true;
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[1].acceptLiabilities, true);
  });
  it('gets guardian_1 signature date', function() {
    guardian_signature.guardian_1_date = '5/7/2015';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[1].signature.month, '5');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[1].signature.day, '7');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[1].signature.year, '2015');
  });
  it('gets guardian_1 signature name', function() {
    guardian_signature.guardian_1_name = 'another guardian name';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[1].signature.name, 'another guardian name');
  });
  it('gets guardian_1 address', function() {
    guardian_signature.guardian_1_address_1 = 'another street address';
    guardian_signature.guardian_1_address_2 = 'an apt';
    guardian_signature.guardian_1_address_city = 'some other city';
    guardian_signature.guardian_1_address_state = 'ZA';
    guardian_signature.guardian_1_address_zip = '88488';
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.street_1, 'another street address');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.street_2, 'an apt');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.city, 'some other city');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.state, 'ZA');
    assert.equal(getGuardianSignature(guardian_signature).guardianInfo[0].address.zip, '88488');
  });
});
