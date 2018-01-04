'use strict';

import React                   from 'react';

import Page                    from '../../../containers/page.jsx';
import RadioSelectorCollection from '../../radio-selector-collection.jsx';
import NavigationButtons       from '../../navigation-buttons.jsx';


const OptOutRadioFormContainer = (props) => {
  return (
     <Page
      {...props}
      sectionKey='voterRegistration'
    >
    <form onSubmit={props.onSubmit}>
      <div className='opt-out-form'>
        <h4>Which best describes you?</h4>
          <RadioSelectorCollection
            name='optOut'
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            selectedValue={props.selectedValue}
            focused={props.focused}
          >
            {props.children}
          </RadioSelectorCollection>

          <NavigationButtons {...props} />
      </div>
      </form>
    </Page>
  )
};

export default OptOutRadioFormContainer;


