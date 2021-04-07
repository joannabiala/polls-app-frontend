import axios from 'axios';

const googleLogin = (accesstoken) => {
  axios.post('http://127.0.0.1:8000/oauth/convert-token', {
    token: accesstoken,
    backend: 'google-oauth2',
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_CLIENT_ID_KEY,
    client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,


  }).then((res) => {
    localStorage.setItem('access_token', res.data.access_token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
  })
}

export default googleLogin;