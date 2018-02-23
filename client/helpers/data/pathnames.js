'use strict';


export const onIDFlow = (props) => {
  return props.location.pathname.startsWith('/add/id-card');
};

export const getTextFromState = (props, iddlText, addText) => {
  if (props.hasOwnProperty('addApp') && addingApp(props.addApp)) {
    return addText;
  }
  return iddlText;
};

export const getTextFromPathname = (props, initialFlow, addDLFlow, addIDFlow) => {
  if (!props.hasOwnProperty('location')) { return initialFlow; }
  let value = splitPathname(props.location.pathname);
  if (driverLicense(value)) {
    return addDLFlow;
  } else if (idCard(value)) {
    return addIDFlow;
  }
  return initialFlow;
};

export const splitPathname = (pathname) => {
  return pathname.split('/')[2];
};

export const addingApp = (value) => {
  return driverLicense(value) || idCard(value);
};

export const driverLicense = (value) => {
  return value === 'driver-license';
};

export const idCard = (value) => {
  return value === 'id-card';
};

export const cdlApp = (value) => {
  return value === 'cdl';
};

const IDDLApp = (value) => {
  return value === 'iddl';
};

export const hasChosenApp = (props) => {
  return cdlApp(props.chooseApp) || IDDLApp(props.chooseApp);
};

export const getActionFromState = (state) => {
  let key = state.application.cardAction;
  if (driverLicense(state.ui.addApp)) {
    key = state.application.DLApp.action;
  } else if (idCard(state.ui.addApp)) {
    key = state.application.IDApp.action;
  }
  return key;
}

export const goToSummary = (props) => {
  console.log(props.location.state)
  return props.location &&
  props.location.state &&
  (props.location.state.nextAddress === 'summary' ||
  props.location.state.nextAddress === 'cdlSummary' );
};
