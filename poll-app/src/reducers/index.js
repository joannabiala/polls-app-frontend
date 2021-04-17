import {combineReducers} from "redux";
import authReducer from "./authReducer";
import pollsReducer from "./pollsReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  form: formReducer
})