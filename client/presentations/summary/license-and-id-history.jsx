'use strict';

import React            from "react";
import * as dataPresent from '../../helpers/data-present';
import { printDate }    from '../../helpers/print-date';

const LicenseAndIdHistory = (props) => {

  let isIssued        = props.licenseAndIdHistory.isIssued;
  if (!dataPresent.licenseAndIdHistory(props.licenseAndIdHistory)) { return null; }

  let date            = printDate(props.licenseAndIdHistory);
  let DLIDNumber      = props.licenseAndIdHistory.DLIDNumber;
  let issuedBy        = props.licenseAndIdHistory.issuedBy;

  if(isIssued !== 'Yes') {
    if(isIssued === 'No')
    return (
    <div className='summary-section'>
      <p>Has existing DL/ID: {isIssued} </p>
    </div>
  );
}
  return (
    <div className='summary-section'>
      <p>Has existing DL/ID: {isIssued} </p>
      <p>Existing DL/ID number: {DLIDNumber}</p>
      <p>Existing DL/ID issued by: {issuedBy} </p>
      <p>Existing DL/ID expiration date: {date}</p>
    </div>
  );
};

export default LicenseAndIdHistory;
