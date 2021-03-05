import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Copyright from '../components/Copyright';
import Logo from '../components/Logo';
import LandingImages from '../components/LandingImages';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { login } from '../Utils/API';
import { useUserProvider } from '../Utils/AppContext';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Home() {
  let history = useHistory();
  const classes = useStyles();
  const { userID, setUserID } = useUserProvider();
  useEffect(() => {
    setUserID({ id: '', email: '', photo: '', username: '' });
  }, []);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleClickEvent(e) {
    e.preventDefault();
    login({ ...loginInfo })
      .then((response) => {
        setUserID({
          id: response.data.id,
          email: response.data.email,
          photo: response.data.photo,
          username: response.data.username
        });
        sessionStorage.setItem('userID', response.data.id);
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('photo', response.data.photo);
        history.push('/profile');
      })
      .catch((err) => {
        handleOpen();
      });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <LandingImages />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2 id="transition-modal-title">CHEFocus</h2>
            <p id="transition-modal-description">
              Incorrect password or email please try again or sign up!
            </p>
          </div>
        </Fade>
      </Modal>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Logo />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
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
                  onChange={(event) => {
                    setLoginInfo({ ...loginInfo, email: event.target.value });
                  }}
                  value={loginInfo.email}
                />
              </Grid>
              <Grid item xs={12}>
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
                  onChange={(event) => {
                    setLoginInfo({
                      ...loginInfo,
                      password: event.target.value
                    });
                  }}
                  value={loginInfo.password}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClickEvent}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
