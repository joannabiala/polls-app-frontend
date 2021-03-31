import {SIGN_IN, SIGN_OUT, GET_POLLS, POLLS_ERROR} from "./types";
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


