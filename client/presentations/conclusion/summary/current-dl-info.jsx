'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import translations       from '../../../i18n';
import { printDate }      from '../../../helpers/print-date';
import PageSummaryLink    from '../../page-summary-link.jsx';
import SummaryItem        from './summary-item.jsx';
import {
  existingDL
} from '../../../helpers/data/card-type';


const CurrentDLInfo = (props) => {
  if(!existingDL(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  let DLNumber = props.currentCardInfo.number
  let date = printDate(props.currentCardInfo);

  return (
    <PageSummaryLink
      to='/current-card-information'
      name='currentCardInformation'
    >
      <SummaryItem
        title='Driver license number'
        text={DLNumber}
      />
      <br></br>
      <SummaryItem
        title='Expiration date'
        text={date}
      />
    </PageSummaryLink>
  )
};

export default CurrentDLInfo;

