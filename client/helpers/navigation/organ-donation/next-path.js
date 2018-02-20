'use strict';

import { under16GuardianSignature } from '../../data/youth';

export const organDonationPath = (props) => {
  let key = 'voterIntro';

  if (under16GuardianSignature(props)) {
    key = 'guardianSignature';
  }
  return key;
};
