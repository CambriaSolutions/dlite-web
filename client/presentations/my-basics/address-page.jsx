'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';

import HomeAddress          from './address/home-address-form.jsx';
import ExplanatoryString    from './address/string.jsx';
import MailingSameAsHome    from './address/mailing-same-as-home.jsx';
import MailingAddress       from './address/mailing-address-form.jsx';

const AddressPage = (props) => {



  return (
    <Page
      {...props}
      sectionKey='myBasics'
    >
      <form onSubmit={props.onSubmit} className='address-form'>
        <HomeAddress
          {...props}
          address         = { props.address.home }
        />
        <MailingSameAsHome
          {...props}
          selectedValue   = { props.address.homeAddressSameAsMailing}
        >
          <ExplanatoryString
            cardType      = { props.cardType }
            locale        = { props.locale }
          />
        </MailingSameAsHome>
        <MailingAddress
          {...props}
          isSameAsHome    = { props.address.homeAddressSameAsMailing }
          address         = { props.address.mailing }
        />
        <NavigationButtons
          {...props}
          errorMessage={ props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default AddressPage;
