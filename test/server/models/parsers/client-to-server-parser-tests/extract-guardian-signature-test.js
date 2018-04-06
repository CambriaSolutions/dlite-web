'use strict';

const assert              = require('assert');
const extractSignature    = require('../../../../../server/models/parsers/client-to-server-parsers/extract-guardian-signature');

describe('extracting guardian signature info', function() {
  let data;
  data.id = '010101';

  beforeEach(function() {
    data.guardianSignature = {
      isSigned:  '',
      guardianInfo: [{
        id: '0',
        acceptLiabilities: '',
        signature: {
          name: '',
          month: '',
          day: '',
          year: '',
        },
        phoneNumber: '',
        address: {
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
        }
      },
      {
        id: '1',
        acceptLiabilities: '',
        signature: {
          name: '',
          month: '',
          day: '',
          year: '',
        },
        phoneNumber: '',
        address: {
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
        }
      }]
    };
  });

  it('saves the isSigned string', function() {
    data.guardianSignature.isSigned = 'signElectronically';
    assert.equal(extractSignature(data).is_signed, data.guardianSignature.isSigned);
  });

  it('saves the guardian[0] name', function() {
    data.guardianSignature.guardianInfo[0].signature.name = 'parent name someone someone';
    assert.equal(extractSignature(data).guardian_0, data.guardianSignature.guardianInfo[0].signature.name);
    assert.equal(extractSignature(data).guardian_0, 'parent name someone someone');
  });

  it('saves the guardian[0] date of signature', function() {
    data.guardianSignature.guardianInfo[0].signature = {
      name: 'parent name someone someone',
      month: '5',
      day: '10',
      year: '2015'
    };
    assert.equal(extractSignature(data).guardian_0_date,'5/10/2015');
  });

  it('saves the guardian[0] street address 1', function() {
    data.guardianSignature.guardianInfo[0].address.street_1 = '190029312';
    assert.equal(extractSignature(data).guardian_0_address_1, '190029312');
  });

  it('saves the guardian[0] street address 2', function() {
    data.guardianSignature.guardianInfo[0].address.street_2 = 'Apt 50';
    assert.equal(extractSignature(data).guardian_0_address_2, 'Apt 50');
  });

  it('saves the guardian[0] city', function() {
    data.guardianSignature.guardianInfo[0].address.city = 'Rockville';
    assert.equal(extractSignature(data).guardian_0_address_city, 'Rockville');
  });

  it('saves the guardian[0] state', function() {
    data.guardianSignature.guardianInfo[0].address.state = 'AR';
    assert.equal(extractSignature(data).guardian_0_address_state, 'AR');
  });

  it('saves the guardian[0] zip', function() {
    data.guardianSignature.guardianInfo[0].address.zip = '99999';
    assert.equal(extractSignature(data).guardian_0_address_zip, '99999');
  });

  it('saves the guardian[1] name', function() {
    data.guardianSignature.guardianInfo[1].signature.name = 'parent name someone else';
    assert.equal(extractSignature(data).guardian_1, data.guardianSignature.guardianInfo[1].signature.name);
    assert.equal(extractSignature(data).guardian_1, 'parent name someone else');
  });

  it('saves the guardian[1] date of signature', function() {
    data.guardianSignature.guardianInfo[1].signature = {
      name: 'parent name someone else',
      month: '5',
      day: '11',
      year: '2015'
    };
    assert.ok(extractSignature(data).guardian_0_date !== '5/11/2015');
    assert.equal(extractSignature(data).guardian_1_date,'5/11/2015');
  });

  it('saves the guardian[1] street address 1', function() {
    data.guardianSignature.guardianInfo[1].address.street_1 = '190029412';
    assert.equal(extractSignature(data).guardian_1_address_1, '190029412');
  });

  it('saves the guardian[1] street address 2', function() {
    data.guardianSignature.guardianInfo[1].address.street_2 = 'Apt 51';
    assert.equal(extractSignature(data).guardian_1_address_2, 'Apt 51');
  });

  it('saves the guardian[1] city', function() {
    data.guardianSignature.guardianInfo[1].address.city = 'Rockland';
    assert.equal(extractSignature(data).guardian_1_address_city, 'Rockland');
  });

  it('saves the guardian[1] state', function() {
    data.guardianSignature.guardianInfo[1].address.state = 'AZ';
    assert.equal(extractSignature(data).guardian_1_address_state, 'AZ');
  });

  it('saves the guardian[1] zip', function() {
    data.guardianSignature.guardianInfo[1].address.zip = '99998';
    assert.equal(extractSignature(data).guardian_1_address_zip, '99998');
  });
});
