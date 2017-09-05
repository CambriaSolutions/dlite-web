'use strict';

import React from "react";

export const SummaryEmpty = (props) => {
  return (
    <div className='summary-section'>
      <p>No information has been entered yet</p>
    </div>
  );
}

export const SummaryNames = (props) => {
  return (
    <div className='summary-section'>
      <p> First Name: {props.legalName.firstName} </p>
      <p> Middle Name: {props.legalName.middleName} </p>
      <p> Last Name: {props.legalName.lastName} </p>
    </div>
  );
}

const SummaryAddressBlob = (props) => {
  return (
    <div>
      <p>Street: {props.address.street}</p>
      <p>City: {props.address.city}</p>
      <p>State: {props.address.state}</p>
      <p>Zipcode: {props.address.zip}</p>
    </div>
  );
}

export const SummaryResidenceAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Residential address: </p>
        <SummaryAddressBlob address={ props.residenceAddress }/>
    </div>
  );
};

export const SummaryMailingAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Mailing address: </p>
      <SummaryAddressBlob address={ props.mailingAddress }/>
    </div>
  );
};

export const SummaryHairColor = (props) => {
  return (
    <div className='summary-page'>
      <p> Hair Color: {props.hairColor.hairColor} </p>
    </div>
  );
};

export const SummaryContactDetails = (props) => {
  return (
    <div className='summary-section'>
      <p>Email: {props.contactDetails.emailAddress}</p>
      <p>Phone: {props.contactDetails.phoneNumber}</p>
    </div>
  );
};

export const SummaryEyeColor = (props) => {
  return (
    <div className='summary-section'>
      <p> Eye Color: {props.eyeColor.eyeColor} </p>
    </div>
  )
}
