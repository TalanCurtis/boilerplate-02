import { combineReducers } from "redux";
import aTest from "./reducers/aTest/aTestReducer";
import aTestForm from "./reducers/aTestForm/aTestFormReducer";

export default combineReducers({
  aTestForm,
  aTest,
});