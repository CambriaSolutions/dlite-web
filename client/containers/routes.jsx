'use strict';

import React from 'react';
import { Route } from 'react-router-dom';

import Home    from '../presentations/home.jsx';
import Summary from './summary-handler.jsx';
import LegalName from './legal-name.jsx';
import alicePath from '../helpers/alice-path';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/about-me/names') } component={LegalName} />
      </div>
    );
  }
}

export default Router;
