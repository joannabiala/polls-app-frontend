import {combineReducers} from "redux";
import authReducer from "./authReducer";
import pollsReducer from "./pollsReducer";
import addPollReducer from "./addPollReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  addPoll: addPollReducer,
  form: formReducer
})