'use strict';

import React            from 'react';
import { printDate }    from '../../../helpers/print-date';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const LicenseIssues = (props) => {
  if (!dataPresent.licenseIssues(props.licenseIssues)) { return null; }
  let isSuspended = props.licenseIssues.isSuspended;
  let date        = printDate(props.licenseIssues);
  let reason      = 'None';

  if(props.licenseIssues.isSuspended === 'Yes') {
    reason = props.licenseIssues.reason;
    return (
      <PageSummaryLink
        to='/my-history/license-issues'
        name='licenseIssues'
      >
        <SummaryItem
          title='Driving record:'
          text={reason}
        />
        <br></br>
        <SummaryItem
          title='Record date:'
          text={date}
        />
      </PageSummaryLink>
    )
  } else {
    return (
      <PageSummaryLink
        to='/my-history/license-issues'
        name='licenseIssues'
      >
        <SummaryItem
          title='Driving record:'
          text={reason}
        />
      </PageSummaryLink>
    )
  }
};

export default LicenseIssues;
