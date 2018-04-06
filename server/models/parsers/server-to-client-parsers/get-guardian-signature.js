'use strict';
const parserHelper          = require('../data-parser');

function guardianSignature(guardian_signature) {
  if(guardian_signature){
    let signatureInfo = {
      isSigned:  guardian_signature.is_signed,
      guardianInfo: [{
        id: '0',
        acceptLiabilities: guardian_signature.guardian_0,
        signature: parserHelper.createDateJson(guardian_signature.guardian_0_date),
        phoneNumber: guardian_signature.guardian_0_phone,
        address: {
          street_1: guardian_signature.guardian_0_address_1,
          street_2: guardian_signature.guardian_0_address_2,
          city: guardian_signature.guardian_0_address_city,
          state: guardian_signature.guardian_0_address_state,
          zip: guardian_signature.guardian_0_address_zip
        }
      },
      {
        id: '1',
        acceptLiabilities: guardian_signature.guardian_1,
        signature: parserHelper.createDateJson(guardian_signature.guardian_1_date),
        phoneNumber: guardian_signature.guardian_1_phone,
        address: {
          street_1: guardian_signature.guardian_1_address_1,
          street_2: guardian_signature.guardian_1_address_2,
          city: guardian_signature.guardian_1_address_city,
          state: guardian_signature.guardian_1_address_state,
          zip: guardian_signature.guardian_1_address_zip
        }
      }]
    };

    signatureInfo.guardianInfo[0].signature.name = guardian_signature.guardian_0_name;
    signatureInfo.guardianInfo[1].signature.name = guardian_signature.guardian_1_name;
    return signatureInfo;
  }
  else{
    return {
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
  }
}

module.exports = guardianSignature;