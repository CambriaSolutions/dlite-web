'use strict';

import Accordion                   from '../../../../containers/accordion.jsx';
import OrganDonation               from './organ-donation.jsx';

const Organ = (props) => {
  return (
    <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
      <OrganDonation organDonation={props.application.organDonation} />
    </Accordion>
  );
};

export default Organ;