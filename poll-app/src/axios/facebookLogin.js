import axios from 'axios';


const facebookLogin = (accesstoken) => {
  axios.post('http://localhost:8000/oauth/convert-token', {
    token: accesstoken,
    backend: 'facebook',
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_CLIENT_ID_KEY,
    client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,


  }).then((res) => {
    localStorage.setItem('access_token', res.data.access_token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
  })
}

export default facebookLogin;