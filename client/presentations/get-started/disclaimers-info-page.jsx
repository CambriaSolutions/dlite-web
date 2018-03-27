'use strict'

import React        from 'react';

const DisclaimersInfo = (props) => {

  return (

    <div className='scroll-wrapper disclaimers-info'>
        <h3 className='translation-missing'>
          Please take a moment to review the following disclaimers:
        </h3>

      <div className='scroll-content'>
        <p className='translation-missing'><a href="#medical">Medical Information</a></p>
        <p className='translation-missing'><a href="#veteran">Veteran Statement</a></p>
        <p className='translation-missing'><a href="#organdonor">Organ Donor Statement</a></p>
        <p className='translation-missing'><a href="#voter">Voter Registration</a></p>
        <p className='translation-missing'><a href="#criminalprosecution">Criminal Prosecution</a></p>
        <p className='translation-missing'><a href="#financial">Financial Responsibility</a></p>
        <p className='translation-missing'><a href="#paymentsrefunds">Payments/Refunds</a></p>
        <p className='translation-missing'><a href="#privacy">Privacy Notice</a></p>
        <p className='translation-missing'><a href="#certificates">Certificates</a></p>

        <h3 className='translation-missing' id='medical'>
          Medical Information
        </h3>

        <h3 className='translation-missing' id='veteran'>
          Veteran Statement
        </h3>

        <h3 className='translation-missing' id='organdonor'>
          Organ Donor Statement
        </h3>

        <h3 className='translation-missing' id='voter'>
          Voter Registration
        </h3>

        <h3 className='translation-missing' id='criminalprosecution'>
          Criminal Prosecution
        </h3>

        <h3 className='translation-missing' id='financial'>
          Financial Responsibility
        </h3>

        <h3 className='translation-missing' id='paymentsrefunds'>
          Payments/Refunds
        </h3>

        <h3 className='translation-missing' id='privacy'>
          Privacy Notice
        </h3>

        <h3 className='translation-missing' id='certificates'>
          Certificates
        </h3>

      </div>
    </div>
  );
};

export default DisclaimersInfo;
