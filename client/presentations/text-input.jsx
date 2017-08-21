'use strict';

import React from 'react';

const TextInput = (props) => {
  let id = `${props.type || ''}${props.identifier[0].toUpperCase()}${props.identifier.slice(1)}`;

  return (
    <div className='text-input-block'>
      <label htmlFor={ id }>{ props.description }</label>
      <div className="input-container">
        <input  type="text"
                id={ id }
                name={ props.identifier }
                onChange={ props.onChange }
                value={ props.value }/>
      </div>
    </div>
  );
};

export default TextInput;
