'use strict';

import React              from 'react';
import { Link }           from 'react-router-dom';
import { pathForPage }    from '../helpers/navigation/page';
import translations       from '../i18n';
import { addOrEdit }      from '../helpers/data/pathnames';


const LinkPresentation = (props) => {
  let className = `${props.editKey} summary edit button ${props.cardType}`;

  let addText = 'Add';
  let editText = translations[props.locale].summaryPage.buttons.edit;

  let buttonText = addOrEdit(props, addText, editText);
  let flow = addOrEdit(props, 'add', 'edit');
  let flowChange = props.onFlowChange;
  let cardType  = props.cardType;

  let linkTo = {
    pathname: pathForPage(props.editKey, {flow: flow})
  };

  const handleClick = (props) => {
    return flowChange(flow, cardType);
  };

  return (
    <div className='summary-section'>
      <div className='row'>
        <div className='unit summary-content'>
          {props.children}
        </div>
        <div className='shadow-container unit-right' onClick={handleClick}>
          <Link
            to={linkTo}
            className= {className}
          >
            <div className='unit edit-icon'></div>
            <div className='unit text-area'>{buttonText}</div>
          </Link>
        </div>
      </div>
      <hr/>
    </div>
  )
};

export default LinkPresentation;