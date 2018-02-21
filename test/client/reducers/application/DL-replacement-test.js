'use strict';

import assert               from 'assert';
import updateReplacement    from '../../../../client/reducers/application/dl-app/update-replacement';

const IDReplacement = {
  type: 'UPDATE_CARD_REPLACEMENT',
  payload: {
    name: 'ID-reason',
    value: 'a reason'
  }
};

const DLReplacement = {
  type: 'UPDATE_CARD_REPLACEMENT',
  payload: {
    name: 'DL-reason',
    value: 'another reason'
  }
};

describe('DL replacement reason', function() {
  let state;

  beforeEach(function() {
    state = {
      reason: ''
    };
  });

  it('returns the action payload value if action payload name is DL', function() {
    let newState = updateReplacement(state, DLReplacement);
    assert.deepEqual(newState.reason, DLReplacement.payload.value);
  });

  it('returns existing state if action payload name is ID', function(){
    let newState = updateReplacement(state, IDReplacement);
    assert.deepEqual(newState, state);
  });
});