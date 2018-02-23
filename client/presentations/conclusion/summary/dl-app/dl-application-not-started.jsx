'use strict';

import React          from "react";
import translations   from '../../../../i18n';
import AddAppLink     from '../Add-app-link.jsx';

import {
  DLAppExists
} from '../../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(DLAppExists(props)) { return null; }

  return (
    <AddAppLink
      to      = '/driver-license'
    >
      <p>{translations.summaryPage.whatImDoing.nothing}</p>
    </AddAppLink>
  );
};

export default DLApplicationNotStarted;

