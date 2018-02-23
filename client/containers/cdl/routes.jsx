'use strict';

import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { cdlPath }                      from '../../helpers/alice-path';
import CDLWelcome                       from './cdl-welcome.jsx';
import DateOfBirth                      from './cdl-date-of-birth.jsx';
import LegalName                        from './cdl-legal-name.jsx';
import Summary                          from './cdl-summary.jsx';

const CDLRoutes = () => {
  return (
    <div>
      <Route path= '/apply/cdl'                         exact component={CDLWelcome}  />
      <Route path={ cdlPath('/true-name')}              component={LegalName}   />
      <Route path={ cdlPath('/date-of-birth')}          component={DateOfBirth} />
      <Route path={ cdlPath('/summary')}                component={Summary}     />
    </div>
  )
};

export default CDLRoutes;