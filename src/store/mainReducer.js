import contactlistReducer from "./contactlistReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  contactlistState: contactlistReducer,
  firebase: firebaseReducer,
});