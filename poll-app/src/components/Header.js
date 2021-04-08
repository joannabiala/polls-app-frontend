import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";
import axios from "axios";
import axiosInstance from "../axios";

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    delete axios.defaults.headers.common['Authorization'];
  }

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
        <button onClick={handleLogout}>
          Logout
        </button>
        <GoogleAuth/>
      </div>
    </div>
  )
}

export default Header;