import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axiosInstance from "../axios/login";
import FacebookLogin from "../axios/facebookLogin";


import FbLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import googleLogin from "../axios/googleLogin";
import axios from "../axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const responseFacebook = (response) => {
  console.log(response);
  FacebookLogin(response.accessToken);
}


const responseGoogle = (response) => {
  console.log(response);
  googleLogin(response.accessToken)
}

export default function SignIn() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };


  const handleSubmitLogin = (event) => {
    event.preventDefault();

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    axios.post('http://127.0.0.1:8000/auth/', data)
      .then((response) => {

        const token = `Token ${response.data.token}`
        axios.defaults.headers.common['Authorization'] = token;

        localStorage.setItem('token', token);

      })
      .catch((error) => {
        alert('Ups! Something went wrong, try again later.')
        console.log(error);
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`oauth/token/`, {
        grant_type: 'password',
        username: formData.email,
        email: formData.username,
        password: formData.password,
        client_id: process.env.REACT_APP_CLIENT_ID_KEY,
        client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        history.push('/');
        window.location.reload();
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username Address"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitLogin}
          >
            Sign In
          </Button>

          <FbLogin
            appId={process.env.REACT_APP_FB_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}