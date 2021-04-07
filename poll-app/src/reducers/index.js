import {combineReducers} from "redux";
import authReducer from "./authReducer";
import pollsReducer from "./pollsReducer";
import addPollReducer from "./addPollReducer";

export default combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  addPoll: addPollReducer
})