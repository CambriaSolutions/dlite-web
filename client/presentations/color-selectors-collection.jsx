'use strict';

import React from 'react';
import ColorSelectorButton from './color-selector-button.jsx';

const HairColorSelector = (props) => {
  let typeName = `${props.type}Color`;
  let currentColor = props.state[typeName];

  let colorButtons = props.colors.map((color) => {
    let tabIndex = '-1';
    let selected = (currentColor === color);
    if (selected || (!currentColor && color === props.colors[0]) ) {
      tabIndex = '0';
    }

    return (
      <ColorSelectorButton
        key={color}
        type={props.type}
        color={color}
        selected={selected}
        onChange={props.onChange}
        tabIndex={tabIndex}
      />
    );
  });

  return (
    <div className='row selector-collection'>
      { colorButtons }
    </div>
  );
}

export default HairColorSelector;

