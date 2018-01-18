const state  = {
  application: {
    id: '',
    legalName: {
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: ''
    },
    cardType: {
      new: [],
      renew: '',
      change: '',
      replace: '',
      youthIDInstead: ''
    },
    cardChanges: {
      correctOrUpdate: '',
      sections: [],
      other: ''
    },
    cardReplacement: {
      reason: ''
    },
    currentCardInfo: {
      number: '',
      day: '',
      month: '',
      year: ''
    },
    licenseType: {
      type: [],
      endorsement: [],
      needEndorsement: ''
    },
    reducedFee: {
      ID: '',
      form: ''
    },
    address: {
      homeAddressSameAsMailing: '',
      home: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: ''
      },
      mailing: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      }
    },
    dateOfBirth: {
      month: '',
      day: '',
      year: ''
    },
    realID: {
      getRealID: '',
      realIdDesignation: ''
    },
    seniorID: '',
    physicalTraits: {
      sex: '',
      eyeColor: '',
      hairColor: ''
    },
    traitsHeightWeight: {
      weight: '',
      heightFeet: '',
      heightInches: ''
    },
    organDonation: {
      donateOrgan: '',
      donateMoney: ''
    },
    licenseAndIdHistory: {
      DLIDNumber: '',
      issuedBy: '',
      month: '',
      day: '',
      year: '',
      isIssued: ''
    },
    namesHistory: {
      hasUsedPreviousNames: '',
      previousNames: ''
    },
    medicalHistory: {
      hasMedicalCondition: '',
      medicalInfo: ''
    },
    licenseIssues: {
      isSuspended: '',
      month: '',
      day: '',
      year: '',
      reason: ''
    },
    socialSecurity: {
      part1: '',
      part2: '',
      part3: '',
      hasSocialSecurity: ''
    },
    veteransService: {
      isVeteran: '',
      receiveBenefits: '',
      previoulyDesignated: '',
      veteransIdentifier: ''
    },
    citizenStatus: '',
    ballotByMail: '',
    eligibilityRequirements: '',
    politicalPartyChoose: {
      isSelected: '',
      politicalPartyChoose: ''
    },
    ballotLanguage: '',
    optOut: '',
    contactMethods: {
      shouldContact: '',
      emailAddress: '',
      phoneNumber: ''
    },
    guardianSignature: {
      isSigned:  '',
      guardianInfo: [{
        id: 'first',
        acceptLiabilities: '',
        signature: '',
        signatureDateMonth: '',
        signatureDateDay: '',
        signatureDateYear: '',
        phoneNumber: '',
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
        IDNumber: '',
        IDIssuedBy: '',
        IDExpirationDateMonth: '',
        IDExpirationDateDay: '',
        IDExpirationDateYear: ''
      },
      {
        id: 'second',
        acceptLiabilities: '',
        signature: '',
        signatureDateMonth: '',
        signatureDateDay: '',
        signatureDateYear: '',
        phoneNumber: '',
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
        IDNumber: '',
        IDIssuedBy: '',
        IDExpirationDateMonth: '',
        IDExpirationDateDay: '',
        IDExpirationDateYear: ''
      }]
    }
  }
};

module.exports = state;
