'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HomeLink           from './home-link.jsx';
import EmojiDebugLink     from './emoji-debug-link.jsx';
import GoogleAnalytics    from './google-analytics.jsx';
import SectionHeader      from './section-header.jsx';

const setTitleLiteral = (title, section) => {
  if (!title) { return; }
  document.title = title;
}

const setTitleFromState = (section) => {
  let name = section.name;
  let title = `DMV ${section.applicationType} - ${section.name}`;
  document.title = title;
};

const setTitle = (literal, section) => {
  if (literal) {
    setTitleLiteral(literal);
  } else if (section) {
    setTitleFromState(section);
  }
}

const ApplicationHeader = (props) => {
  return ReactDOM.createPortal(
    <div className='application-header'>
      {props.applicationType}
    </div>, document.getElementById('application-header')
  );
}

const Page = (props) => {
  setTitle(props.pageTitle, props.section);
  let name = props.sectionName || (props.section && props.section.name);

  return (
    <div className='application-page'>
      <GoogleAnalytics />
      
      <ApplicationHeader
        applicationType = {props.section.applicationType}
      />
      <SectionHeader
        name={name}
      />

      {props.children}

      <HomeLink />
      <EmojiDebugLink
        locale         =  { props.locale }
        onLocaleChange = { props.onLocaleChange }
      />

    </div>
  );
};

export default Page;
