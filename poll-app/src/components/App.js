import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import axios from "axios";


import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import PollDelete from "./Polls/PollDelete";
import PollEdit from "./Polls/PollEdit";
import PollList from "./Polls/PollList";
import PollShow from "./Polls/PollShow";
import PollCreate from "./Polls/PollCreate";

axios.defaults.withCredentials = true;


const App = () => {

  const access_token = localStorage.getItem('access_token');
  if (access_token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + access_token;
  }

  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    console.log(token)
  }


  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/polls/delete" exact component={PollDelete}/>
        <Route path="/polls/edit" exact component={PollEdit}/>
        <Route path="/polls/list" exact component={PollList}/>
        <Route path="/polls/show/:id" exact component={PollShow}/>
        <Route path="/polls/create" exact component={PollCreate}/>
      </BrowserRouter>
    </div>
  )
}
export default App;