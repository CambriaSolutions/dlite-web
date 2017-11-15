'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const LicenseIssues = (props) => {

  let isSuspended = props.licenseIssues.isSuspended;
  if (!dataPresent.value(isSuspended)) { return null; }

  let date        = props.licenseIssues.month + '/' +
                    props.licenseIssues.day + '/' +
                    props.licenseIssues.year;

  let reason      = props.licenseIssues.reason;

  if(isSuspended !== 'Yes') {
    if(isSuspended === 'No')
    return (
    <div className='summary-section'>
      <p> Have suspended license: {isSuspended} </p>
    </div>
  );
}
return (
      <div className='summary-section'>
        <p> Have suspended license: {isSuspended} </p>
        <p> Suspended license date: {date} </p>
        <p> Suspended license reason: {reason} </p>
      </div>
    );

};

export default LicenseIssues;
