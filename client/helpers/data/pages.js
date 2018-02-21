'use strict';
import {
  alicePath,
  iddlPath,
  addPath
} from '../alice-path';
import {
  chooseCardType,
  currentCardInfo,
  updateAndCorrect,
  realID,
  chooseLicenseClass,
  replacementDetails,
  socialSecurity,
  medicalHistory,
  nameHistory,
  organDonationPath,
  citizenship,
  votingEligibility,
  optOut,
  summary,
  addIDWdywtdt,
  addCurrentIDInfo,
  addSeniorID
} from './next-path';

const getStarted = [
  {
    key: 'chooseLanguage',
    description: 'Choose language for app',
    path: alicePath('/choose-language'),
    next: 'choose'
  },
  {
    key: 'choose',
    description: '',
    path: alicePath('/choose')
  },
  {
    key: 'IDme',
    description: 'ID Me',
    path: alicePath('/sign-in'),
    next: 'welcome'
  },
  {
    key: 'welcome',
    description: 'Welcome',
    path: '/welcome',
    next: 'legalName',
  },
  {
    key: 'legalName',
    description: 'Legal name',
    path: '/my-basics/legal-name',
    next: 'dateOfBirth',
  },
  {
    key: 'dateOfBirth',
    description: 'Date of birth',
    path: '/my-basics/date-of-birth',
    next: 'wdywtdt'
  },
  {
    key: 'wdywtdt',
    description: 'What do you want to do today?',
    path: '/what-do-you-want-to-do-today',
    next: 'chooseCardType'
  },
  {
    key: 'chooseCardType',
    description: 'Choose card type',
    path: '/select-id-dl',
    next: chooseCardType
  },
  {
    key: 'currentCardInfo',
    description: 'Current card info',
    path: '/current-card-information',
    next: currentCardInfo
  },
  {
    key: 'updateAndCorrect',
    description: 'Updates and Corrections',
    path: '/updates-and-corrections',
    next: updateAndCorrect
  },
  {
    key: 'replacementDetails',
    description: 'Replacement Details',
    path: '/replacement-details',
    next: replacementDetails
  },
  {
    key: 'youthIDInstead',
    description: 'Youth DL message',
    path: '/youth-license-notification',
    next: 'realID',
  },
  {
    key: 'seniorID',
    description: 'Senior ID',
    path: '/senior-id',
    next: 'realID'
  },
  {
    key: 'realID',
    description: 'Real ID',
    path: '/real-id',
    next: realID
  },
  {
    key: 'chooseLicenseClass',
    description: 'Choose license class',
    path: '/license-type',
    next: chooseLicenseClass
  },
  {
    key: 'reducedFeeID',
    description: 'Reduced fee ID',
    path: '/reduced-fee',
    next: 'getStarted'
  },
  {
    key: 'getStarted',
    description: 'Get started intro page',
    path: '/get-started',
    next: 'addresses',
  }
];

const myBasics = [
  {
    key: 'addresses',
    description: 'Addresses',
    path: '/my-basics/address',
    next: 'sexEyeHair'
  },
  {
    key: 'sexEyeHair',
    description: 'Physical traits',
    path: '/my-basics/physical-traits',
    next: 'heightWeight'
  },
  {
    key: 'heightWeight',
    description: 'Height and weight',
    path: '/my-basics/traits-height-weight',
    next: 'socialSecurity'
  },
  {
    key: 'socialSecurity',
    description: 'Social security',
    path: '/my-basics/social-security',
    next: socialSecurity
  }
];

const myHistory = [
  {
    key: 'medicalHistory',
    description: 'Medical history',
    path: '/my-history/medical/',
    next: medicalHistory
  },
  {
    key: 'cardHistory',
    description: 'License and id history',
    path: '/my-history/license-and-id',
    next: 'nameHistory'
  },
  {
    key: 'nameHistory',
    description: 'Names history',
    path: '/my-history/names/',
    next: nameHistory
  },
  {
    key: 'licenseIssues',
    description: 'License issues',
    path: '/my-history/license-issues',
    next: 'veterans'
  },
  {
    key: 'veterans',
    description: 'Veterans service',
    path: '/my-history/veterans-service',
    next: 'organDonation'
  }
];

const organDonation = [
  {
    key: 'organDonation',
    description: 'Organ donation',
    path: '/organ-donation',
    next: organDonationPath
  }
];

const voterRegistration = [
  {
    key: 'voterIntro',
    description: 'Voter intro',
    path: '/voting-registration/introduction',
    next: 'citizenship'
  },
  {
    key: 'citizenship',
    description: 'Citizenship',
    path: '/voting-registration/citizenship',
    next: citizenship
  },
  {
    key: 'votingEligibility',
    description: 'Eligibility ',
    path: '/voting-registration/eligibility',
    next: votingEligibility
  },
  {
    key: 'votingOptOut',
    description: 'Opt out',
    path: '/voting-registration/opt-out',
    next: optOut
  },
  {
    key: 'voterPreferences',
    description: 'Voter preferences',
    path: '/voting-registration/preferences'
  },
  {
    key: 'voterPreferencesUpdated',
    description: 'Voter preferences updated',
    path: '/voting-registration/preferences-updated'
  },
  {
    key: 'choosePoliticalParty',
    description: 'Choose party',
    path: '/voting-registration/choose-party',
    next: 'chooseBallotLanguage'
  },
  {
    key: 'chooseBallotLanguage',
    description: 'Ballot language',
    path: '/voting-registration/language',
    next: 'ballotByMail'
  },
  {
    key: 'ballotByMail',
    description: 'Ballot by mail',
    path: '/voting-registration/vote-by-mail',
    next: 'contactMethods'
  },
  {
    key: 'contactMethods',
    description: 'Contact methods',
    path: '/voting-registration/contact-methods',
    next: 'voterConfirmation'
  },
  {
    key: 'voterConfirmation',
    description: 'Voter registration confirmation',
    path: '/voting-registration/confirmation'
  },
];

const conclusion = [
  {
    key: 'summary',
    description: 'Summary',
    path: '/summary',
    next: summary
  },
  {
    key: 'appointmentPreparation',
    description: 'Appointment preparation',
    path: '/appointment-preparation'
  },
  {
    key: 'requiredDocuments',
    description: 'Required documents',
    path: '/appointment-preparation/documents'
  },
  {
    key: 'guardianSignature',
    description: 'Parent/Guardian Signature',
    path: '/guardian-signature',
    next: 'summary'
  }
];

const addDLCard = [
  {
    key: 'addDLWdywtdt',
    description: 'what do you want to do with added DL',
    path: '/driver-license',
    next: 'addLicenseClass'
  },
  {
    key: 'addLicenseClass',
    description: 'choose license class for added card',
    path: '/driver-license/type',
    next: 'addMedicalHistory'
  },
  {
    key: 'addMedicalHistory',
    description: 'add medical history for added card',
    path: '/driver-license/medical-history',
    next: 'addLicenseHistory'
  },
  {
    key: 'addLicenseHistory',
    description: 'add license history for added card',
    path: '/driver-license/license-history',
    next: 'addIssueHistory'
  },
  {
    key: 'addIssueHistory',
    description: 'add issue history for added card',
    path: '/driver-license/issue-history',
    next: 'summary'
  }
];

const addIDCard = [
  {
    key: 'addIDWdywtdt',
    description: 'what do you want to do with added ID card',
    path: '/id-card',
    next: addIDWdywtdt
  },
  {
    key: 'addCurrentIDInfo',
    description: 'add current ID info',
    path: '/id-card/current-card-information',
    next: addCurrentIDInfo
  },
  {
    key: 'addSeniorID',
    description: 'get senior ID on added ID card',
    path: '/id-card/senior-id',
    next: addSeniorID
  },
  {
    key: 'addReducedFee',
    description: 'add reduced fee to added ID card',
    path: '/id-card/reduced-fee',
    next: 'summary'
  }
];

const expand = (collection) => {
  return collection.map((item) => {
    let path = item.path.startsWith('/apply/') ? item.path : iddlPath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

const expandAdd = (collection) => {
  return collection.map((item) => {
    let path = addPath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  getStarted: expand(getStarted),
  myBasics: expand(myBasics),
  myHistory: expand(myHistory),
  organDonation: expand(organDonation),
  voterRegistration: expand(voterRegistration),
  conclusion: expand(conclusion),
  addDLCard: expandAdd(addDLCard),
  addIDCard: expandAdd(addIDCard)
};

