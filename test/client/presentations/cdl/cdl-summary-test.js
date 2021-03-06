'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import SummaryPage      from '../../../../client/presentations/cdl/summary-page.jsx';

describe('CDL Summary page', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      cdl: {
        cardAction: '',
        certification: '',
        basics: {
          legalName: {
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: ''
          },
          dateOfBirth: {
            month: '',
            day: '',
            year: ''
          },
          socialSecurity: {
            hasSocialSecurity: 'Yes',
            part1: '123',
            part2: '45',
            part3: '6789'
          },
          address: {
            home: {
              street_1: '',
              street_2: '',
              zip: '',
              city: '',
              state: ''
            },
            sameAddressAsMailing: '',
            mailing: {
              street_1: '',
              street_2: '',
              zip: '',
              city: '',
              state: ''
            }
          },
          language: {
            ballotLanguage: ''
          }
        },
        history: {
          currentDLInfo: {
            number:   '',
            month:        '',
            day:          '',
            year:         '',
            isIssued:     '',
            issuedBy:     ''
          },
          medicalHistory: {
            hasMedicalCondition: '',
            medicalInfo: ''
          },
          namesHistory: {
            hasUsedPreviousNames: '',
            previousNames: ''
          },
          otherStateLicenses: {
            hasNonCALicenses: '',
            tenYearHistory: ''
          },
          otherStateLicenses: {
            hasNonCALicenses: '',
            tenYearHistory: ''
          },
          licenseIssues: {
            isSuspended: '',
            month: '',
            day: '',
            year: '',
            reason: ''
          }
        },
        voting: {
          citizenStatus: 'Yes',
          eligibilityRequirements: 'Yes',
          optOut: '',
          ballotByMail: '',
          politicalPartyChoose: {
            isSelected: '',
            otherParty: '',
            politicalPartyChoose: ''
          },
          contactMethods: {
            shouldContact: '',
            emailAddress: '',
            phoneNumber1: '',
            phoneNumber2: '',
            phoneNumber3: ''
          }
        },
        cdlEndorsements: {
          type: [],
          needEndorsement: ''
        },
        cdlCertificates: {
          type: [],
          needCertificates: ''
        }
      },
       organDonation: {
          donateMoney: 'Yes',
          donateOrgan: 'Yes'
        },
      server: '',
      onSubmit: spy(),
      ui: { }
    };
  });

  it('has 5 accordions', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('#cdl-summary-accordion').length);
    assert.ok(component.find('#basics-summary-accordion').length);
    assert.ok(component.find('#history-summary-accordion').length);
    assert.ok(component.find('#organ-donation-summary-accordion').length);
    assert.ok(component.find('#voter-registration-summary-accordion').length);
  });

  it('has a submit button', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('.navigation-buttons .submit').length, 'submit button missing');
  });

  it('has a header', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('Please take a minute to review your answers.'));
  });

  it('shows user answer to certification type', function() {
    props.cdl.certification = 'inter';
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('Type of drivingInterstate'));
  });
});
