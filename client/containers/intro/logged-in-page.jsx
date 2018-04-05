'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';

const LoggedIn = (props) => {

  let user = props.match.params.user;
  props.onLoggedIn(user, props.history);

  return null;
};


const mapDispatchToProps = (dispatch) => {
  const onLoggedIn    = handlers.onLoggedIn(dispatch);
  return {
    onLoggedIn
  }
};


export default connect(null, mapDispatchToProps)(LoggedIn);
