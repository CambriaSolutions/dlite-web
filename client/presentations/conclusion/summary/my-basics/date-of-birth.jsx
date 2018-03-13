'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

const DateOfBirth = (props) => {
  if (!dataPresent.date(props.dateOfBirth)) { return null; }

  let dateOfBirth = printDate(props.dateOfBirth);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = { translations[props.locale].shared.labels.dateOfBirth }
        text  = { dateOfBirth}
      />
  </PageSummaryLink>
  );
};

export default DateOfBirth;
