'use strict';

const cdl = [
  {
    key: 'cdl',
    description: 'CDL welcome page',
    path: '',
    next: 'cdlLegalName'
  },
  {
    key: 'cdlLegalName',
    description: 'Legal Name',
    path: '/true-name',
    next: 'cdlDateOfBirth'
  },
  {
    key: 'cdlDateOfBirth',
    description: 'Date of Birth',
    path: '/date-of-birth',
    next: 'cdlWdywtdt'
  },
  {
    key: 'cdlWdywtdt',
    description: 'What do you want to do today',
    path: '/what-do-you-want-to-do-today',
    next: 'cdlSummary'
  },
  {
    key: 'cdlSummary',
    description: 'summary of CDL app',
    path: '/summary',
    next: ''
  }
];

export default cdl;
