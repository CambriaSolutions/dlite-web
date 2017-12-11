'use strict';

import React                    from 'react';

import HomeLink                 from '../../presentations/home-link.jsx';
import LinkButton               from '../../presentations/link-button.jsx';
import alicePath                from '../../helpers/alice-path';
import BackButton               from '../back-button.jsx';
import navigateOnBack           from '../../helpers/navigate-on-back';

const Intro = (props) => {
  const linkAddress             = '/my-basics/address';

  return (
    <div>
      <HomeLink />

      <div className='intro-info'>
        <h3>Welcome to the Online Driver License application!</h3>

        <h4>This form is broken in 4 sections:</h4>
        <ol className='decimal-list'>
          <li>My Basics</li>
          <li>License History</li>
          <li>Voluntary Services</li>
          <li>Voter Registration</li>
        </ol>
        <p>The DMV cares about your privacy. We will protect your data.</p>

        <hr />
        <p>The online form takes most customers<br />
          <b>10 minutes</b></p>


        <div className='navigation-buttons'>
          <BackButton onBack={props.onBack} key='back-button' />
          <LinkButton
            to={linkAddress}
            linkText='Get started'
            className='continue get-started forward'
          />
        </div>
      </div>
    </div>
  );
}



export default Intro;
