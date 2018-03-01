'use strict';

import React              from 'react';
import * as dataPresent   from '../../../../helpers/data-present';
import translations       from '../../../../i18n';
import { printDate }      from '../../../../helpers/print-date';
import PageSummaryLink    from '../Page-summary-link.jsx';
import SummaryItem        from '../summary-item.jsx';
import { hasValue }       from '../../../../helpers/data/validations';
import {
  existingID
} from '../../../../helpers/data/card-type';

const IDNumber = (props) => {
  if (!hasValue(props.number)) { return null; }
  return (
    <SummaryItem
      title='ID card number'
      text={props.number}
    />
  )
};

const IDDate = (props) => {
  if (!dataPresent.date(props.currentCardInfo)) { return null; }
  let date = printDate(props.currentCardInfo);
  return (
    <SummaryItem
      title='Expiration date'
      text={date}
    />
  )
};

const CurrentIDInfo = (props) => {

  if(!existingID(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.IDApp.currentCard)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name='addCurrentIDInfo'
    >
      <IDNumber
        number = {props.IDApp.currentCard.number}
      />

      <IDDate
        currentCardInfo = {props.IDApp.currentCard}
      />
    </PageSummaryLink>
  )
};

export default CurrentIDInfo;

