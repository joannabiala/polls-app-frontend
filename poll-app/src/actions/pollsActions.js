import {GET_POLLS, POLLS_ERROR} from "./types";
import axios from 'axios'

export const getPolls = () => async dispatch => {
  try{
    const res = await axios.get( "http://localhost:8000/poll/")
    dispatch( {
      type: GET_POLLS,
      payload: res.data
    })
  }
  catch(e){
    dispatch( {
      type: POLLS_ERROR,
      payload: console.log(e),
    })
  }

}
