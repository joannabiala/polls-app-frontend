import {
  GET_POLLS,
  POLLS_ERROR,
  GET_POLL,
  DELETE_POLL,
  EDIT_POLL,
  GET_ALL_POLLS,
  SUBMIT_FORM
} from "./types";
import axios from 'axios'
import history from "../history";

export const getPolls = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8000/poll/")
    dispatch({
      type: GET_POLLS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: POLLS_ERROR,
      payload: console.log(e),
    })
  }
}


export const getPoll = (id) => async dispatch => {
  const res = await axios.get(`http://localhost:8000/poll/${id}/`)
  dispatch({
    type: GET_POLL,
    payload: res.data
  })
}


export const getAllPolls = () => async dispatch => {
  const res = await axios.get(`http://localhost:8000/allpolls/`)
  dispatch({
    type: GET_ALL_POLLS,
    payload: res.data
  })
}


export const deletePoll = (id) => async dispatch => {
  await axios.delete(`http://localhost:8000/poll/${id}/`);
  dispatch({type: DELETE_POLL, payload: id})
  history.push('/polls/list');
}


export const editPoll = (id, formValues) => async dispatch => {
  const response = await axios.put(`/poll/${id}`, formValues);
  dispatch({type: EDIT_POLL, payload: response.data});
}

export const selectPollById = (state, pollId) => {
  state.poll.poll.find((poll) => poll.id === pollId)
}


export const submitForm = (formValues, polId) => async (dispatch)=>{

  const parsedFormValues = {}
  for (const [key, value] of Object.entries(formValues)) {
    const newKey = key.replace("question", "")
    parsedFormValues[newKey] = parseInt(value)
  }

  const request = {
    poll: polId,
    user_answers: JSON.stringify(parsedFormValues)
  }

  const response = await axios.post('http://localhost:8000/usersanswers/', request);

  dispatch({type: SUBMIT_FORM, payload: response.data})
  history.push('/');

};

