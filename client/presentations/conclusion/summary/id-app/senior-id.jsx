'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const SeniorID = (props) => {
  if (!hasValue(props.seniorID)) { return null; }

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = 'seniorID'
    >
      <SummaryItem
        title='Senior ID'
        text={props.seniorID}
      />
    </PageSummaryLink>
  )
};

export default SeniorID;
