'use strict';

import React from 'react';

import { updateLicenseAndIdHistory }       from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import NavigationButtons                   from '../../presentations/navigation-buttons.jsx';
import LicenseAndIdHistory                 from "../../presentations/apply/license-and-id-history-form.jsx";
import EnterLicenseAndIdHistory            from "../../presentations/apply/enter-license-and-id-history-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/handlers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled         = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));
  let showLicenseAndIdHistory  = false;
  let onSubmit                 = navigateOnSubmit('/my-history/names/', props);
  let onBack                   = navigateOnBack(props);

  if(props.licenseAndIdHistory.isIssued === 'Yes') {
    showLicenseAndIdHistory  = false;
    continueDisabled = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));

    return (
      <div>
        <form onSubmit={onSubmit}>
          <LicenseAndIdHistory
            onChange       ={props.onChange}
            selectedValue  ={props.licenseAndIdHistory.isIssued}
            cardType       ={props.cardType}
          />

          <EnterLicenseAndIdHistory
            onChange               ={props.onChange}
            licenseAndIdHistory    ={props.licenseAndIdHistory}
          />

          <NavigationButtons
            continueDisabled={continueDisabled}
            onBack= {onBack}
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <LicenseAndIdHistory
          onChange      ={props.onChange}
          selectedValue ={props.licenseAndIdHistory.isIssued}
          cardType      ={props.cardType}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack= {onBack}
        />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    licenseAndIdHistory: state.application.licenseAndIdHistory,
    cardType: state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateLicenseAndIdHistory, ConnectedForm);
