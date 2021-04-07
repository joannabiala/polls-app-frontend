import {ADD_POLL, GET_POLLS, POLLS_ERROR} from "./types";
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


export const addPoll = pollObj => {
  return (dispatch) => {
    axios.post("http://localhost:8000/poll/", pollObj)
      .then(response => {
        dispatch({
          type: ADD_POLL,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
}
