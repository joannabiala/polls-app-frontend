import {
  GET_POLLS,
  GET_POLL,
  DELETE_POLL,
  EDIT_POLL
} from "../actions/types";
import _ from 'lodash';


const initialState = {
  polls: [],
  loading: true
}

export default function (state = initialState, action) {

  switch (action.type) {

    case GET_POLLS:
      return {
        ...state,
        polls: action.payload,
        loading: false
      }
    case GET_POLL:
      return {...state, [action.payload.id]: action.payload}
    case DELETE_POLL:
      return _.omit(state, action.payload)
    case EDIT_POLL:
      return state.polls.filter((poll) => poll.id !== action.payload)
    default:
      return state
  }

}