'use strict';
const parserHelper          = require('../data-parser');

function guardianSignature(data) {
  if(data.guardianSignature.isSigned === '' ) { return null; }
  let signature = data.guardianSignature;

  return {
    application_id            : data.id,
    is_signed                 : signature.isSigned,
    guardian_0                : signature.guardianInfo[0].acceptLiabilities,
    guardian_0_name           : signature.guardianInfo[0].signature.name,
    guardian_0_date           : parserHelper.createDateString(signature.guardianInfo[0].signature),
    guardian_0_phone          : signature.guardianInfo[0].signature.phoneNumber,
    guardian_0_address_1      : signature.guardianInfo[0].address.street_1,
    guardian_0_address_2      : signature.guardianInfo[0].address.street_2,
    guardian_0_address_city   : signature.guardianInfo[0].address.city,
    guardian_0_address_state  : signature.guardianInfo[0].address.state,
    guardian_0_address_zip    : signature.guardianInfo[0].address.zip,
    guardian_1                : signature.guardianInfo[1].acceptLiabilities,
    guardian_1_name           : signature.guardianInfo[1].signature.name,
    guardian_1_date           : parserHelper.createDateString(signature.guardianInfo[1].signature),
    guardian_1_phone          : signature.guardianInfo[1].signature.phoneNumber,
    guardian_1_address_1      : signature.guardianInfo[1].address.street_1,
    guardian_1_address_2      : signature.guardianInfo[1].address.street_2,
    guardian_1_address_city   : signature.guardianInfo[1].address.city,
    guardian_1_address_state  : signature.guardianInfo[1].address.state,
    guardian_1_address_zip    : signature.guardianInfo[1].address.zip
  };
};

module.exports = guardianSignature;