'use strict';

function defaultState() {
  return {
    street: '',
    city: '',
    state: 'CA',
    zip: '',
    isSameAsResidential: false
  };
}

export default function(state = defaultState(), action) {
  if (action.type !== 'UPDATE_MAILING_ADDRESS') { return state; }

  let data = {};
  let payload = action.payload;

  if(payload){

    if(payload.value === true){
      // Update mailing address with residence address
      data = {
        isSameAsResidential: true
      };
    }
    else if (payload.value === false){
      data['isSameAsResidential'] = false;
    }

    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}
