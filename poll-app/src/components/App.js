import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom"

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import PollCreate from "./Polls/PollCreate";
import PollDelete from "./Polls/PollDelete";
import PollEdit from "./Polls/PollEdit";
import PollList from "./Polls/PollList";
import PollShow from "./Polls/PollShow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/polls/create" exact component={PollCreate}/>
          <Route path="/polls/delete" exact component={PollDelete}/>
          <Route path="/polls/edit" exact component={PollEdit}/>
          <Route path="/polls/list" exact component={PollList}/>
          <Route path="/polls/show" exact component={PollShow}/>
      </BrowserRouter>
    </div>
  )
}
export default App;