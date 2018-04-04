'use strict';

import {
  changeSection,
  changePathname
 } from '../../actions';

export default (dispatch) => {
  return (value, section, pathname, savedPath) => {
    if (savedPath === pathname) { return; }
    dispatch(changePathname(pathname));
    if (section.key === value) { return; }
    dispatch(changeSection(value));
  };
};
