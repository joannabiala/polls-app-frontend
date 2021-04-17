import axios from "axios";

export const submit = values => {
  axios.post("http://localhost:8000/poll/", values)
    .then(response => {
      console.log(values)
      console.log(response)
    })
}