import { TYPES } from '../../actions';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (!action.type.match(/PAGE_ELEMENT/)) { return state; }
  if (action.type === TYPES.BLUR_PAGE_ELEMENT) { return ''; }

  let payload = action.payload;
  return payload.value || state;
}
