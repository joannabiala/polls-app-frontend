import {ADD_POLL} from "../actions/types";

const addPollReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_POLL:
      const poll = state.poll.concat(action.payload);
      return {...state, poll};
    default:
      return state;
  }
}

export default addPollReducer;