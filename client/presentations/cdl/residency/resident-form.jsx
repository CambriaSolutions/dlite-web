'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';

const ResidencyRadios = (props) => {
  return (
    <fieldset>
      <RadioCollection
        {...props}
        name  = 'isResident'
        errorMessage  = { props.validations.isResident() }
      >
        { radioYesNoGroup() }
      </RadioCollection>
    </fieldset>
  );
};

export default ResidencyRadios;