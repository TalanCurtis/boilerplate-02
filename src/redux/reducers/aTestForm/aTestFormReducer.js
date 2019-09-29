
// import Actions Types
import { cloneDeep } from 'lodash';
import {
  UPDATE_ATESTFORM,
} from './aTestFormActions';

// Initial State
const initialState = {
  email:"",
  age:"",
  name:"",
  errors:{
    age:[],
    name:[],
    email:[]
  }
}

// Reducer
export default function (state = initialState, action) {
  let updateState = cloneDeep(state)
  switch (action.type) {
      case UPDATE_ATESTFORM:
          updateState[action.payload.key] = action.payload.value;
          return updateState;
      default:
          return state;
  }
}