import {GET_POLLS} from "../actions/types";

const initialState = {
  polls:[],
  loading:true
}

export default function(state = initialState, action){

  switch(action.type){

    case GET_POLLS:
      return {
        ...state,
        polls:action.payload,
        loading:false

      }
    default: return state
  }

}