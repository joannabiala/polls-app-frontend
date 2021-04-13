import {SIGN_IN, SIGN_OUT} from "./types";
import axios from "axios";

export const signIn =(userId)=>{
  return{
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () =>{
  return{
    type: SIGN_OUT
  }
}


export const createPoll = (formValues) => async (dispatch)=>{
  await axios.post('http://localhost:8000/poll/', formValues)
};
