'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import translations     from '../../../i18n';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import { hasValue }     from '../../../helpers/data/validations';
import {
  showCDLEndorsements
} from '../../../helpers/data/cdl';

const DoubleTriple = (props) => {
  const doubleTriple = 'Doubles/Triples';
  if (props.array.indexOf('doubleTriple') === -1) { return null; }
  return <li key='droubleTriple'>{doubleTriple}</li>
};

const PassengerVehicle = (props) => {
  const passengerVehicle = 'Passenger Vehicle';
  if (props.array.indexOf('passengerVehicle') === -1) { return null; }
  return <li key='passengerVehicle'>{passengerVehicle}</li>
};

const SchoolBus = (props) => {
  const schoolBus = 'School Bus';
  if (props.array.indexOf('schoolBus') === -1) { return null; }
  return <li key='schoolBus'>{schoolBus}</li>
};

const TankVehicles = (props) => {
  const tankVehicles = 'Tank Vehicles';
  if (props.array.indexOf('tank') === -1) { return null; }
  return <li key='tank'>{tankVehicles}</li>
};

const HazMat = (props) => {
  const hazMat = 'HazMat';
  if (props.array.indexOf('hazmat') === -1) { return null; }
  return <li key='hazmat'>{hazMat}</li>
};

const TankHazMat = (props) => {
  const tankHazmat = 'Tank/HazMat';
  if (props.array.indexOf('tankHazmat') === -1) { return null; }
  return <li key='tankHazmat'>{tankHazmat}</li>
};

const Firefighter = (props) => {
  const firefighter = 'Firefighter';
  if (props.array.indexOf('firefighter') === -1) { return null; }
  return <li key='firefighter'>{firefighter}</li>
};

const CDLEndorsements = (props) => {
  if(!showCDLEndorsements(props.cdlEndorsements) ) { return null; }
  let locale = props.locale;
  let endorsements = (
    <div>
      <DoubleTriple     array = {props.cdlEndorsements.type} locale = {locale}/>
      <PassengerVehicle array = {props.cdlEndorsements.type} locale = {locale}/>
      <SchoolBus        array = {props.cdlEndorsements.type} locale = {locale}/>
      <TankVehicles     array = {props.cdlEndorsements.type} locale = {locale}/>
      <HazMat           array = {props.cdlEndorsements.type} locale = {locale}/>
      <TankHazMat       array = {props.cdlEndorsements.type} locale = {locale}/>
      <Firefighter      array = {props.cdlEndorsements.type} locale = {locale}/>
    </div>
  );

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'Endorsement(s)'
        text  = {endorsements}
      />
    </PageSummaryLink>
  )
};

export default CDLEndorsements;
