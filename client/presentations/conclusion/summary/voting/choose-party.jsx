'use strict';

import React from 'react';

import PageSummaryLink            from '../../../page-summary-link.jsx';
import SummaryItem                from '../summary-item.jsx';
import {
  politicalPartySelected,
  getStringByParty
}   from '../../../../helpers/data/voting';

const PoliticalPartyChoose = (props) => {
  if (!politicalPartySelected(props) ) { return null; }

  let party = getStringByParty(props);

  return (
    <PageSummaryLink
      to='/voting-registration/choose-party'
      name='choosePoliticalParty'
    >
      <SummaryItem
        title = 'Political party'
        text  = {party}
      />
    </PageSummaryLink>
  )
};

export default PoliticalPartyChoose;
