'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterPreviousNames = (props) => {
  if(props.namesHistory.hasUsedPreviousNames !== 'Yes') { return null; }
  return (
    <div className='enter-previous-names'>
      <hr/>
      <h2 className='question'>Please list all previous legal names.</h2>
      <p>For example, include your maiden name.</p>
      <p>Separate by commas.</p>
      <TextArea
        {...props}
        identifier='previousNames'
        description='Previous Names:'
        value     = { props.namesHistory.previousNames }
      />
    </div>
  );
};

export default EnterPreviousNames;

