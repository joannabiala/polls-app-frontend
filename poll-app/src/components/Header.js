import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Poll app
      </Link>
      <div className="right menu">


        <Link to="/polls/create" className="item">
          Add new poll
        </Link>

        <Link to="/polls/list" className="item">
          My polls
        </Link>

        <GoogleAuth/>
      </div>
    </div>
  )
}

export default Header;