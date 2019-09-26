
// import Actions Types
import {
  UPDATE_ATEST,
} from './aTestActions';

// Initial State
const initialState = {
  value:""
}

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case UPDATE_ATEST:
          return Object.assign({}, state, { value: action.payload.value })
      default:
          return state;
  }
}