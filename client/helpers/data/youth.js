'use strict';

import { 
  ageChecks, 
  isPreregistering
} from '../calculate-age';
import { getDL } from './card-type';

export const validToContinue = (props) => {
  return props.cardType.youthIDInstead !== 'No' ||
    ageChecks.GreaterThanEqual15(props.dateOfBirth);
};

export const tooYoungForDL = (props) => {
  return ageChecks.Under15Half(props.dateOfBirth) &&
    getDL(props);
};

export const under16GuardianSignature = (props) => {
  return ageChecks.Under16(props.dateOfBirth);
};
export const checkPreReg = (dateOfBirth) => {
  return isPreregistering(dateOfBirth) ? 'voterPreRegistration' : 'voterRegistration';
};
