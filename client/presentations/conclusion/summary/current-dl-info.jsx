'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import translations       from '../../../i18n';
import { printDate }      from '../../../helpers/print-date';
import SummaryItem        from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';

const CurrentDLInfo = (props) => {
  if(!getDL(props)) { return null; }
  if(props.cardType.cardAction === 'new') { return null; }
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  let DLNumber = props.currentCardInfo.number
  let date = printDate(props.currentCardInfo);

  return (
    <div>
      <SummaryItem
        title='Driver license number'
        text={DLNumber}
      />
      <br></br>
      <SummaryItem
        title='Expiration date'
        text={date}
      />
    </div>
  )
};

export default CurrentDLInfo;

