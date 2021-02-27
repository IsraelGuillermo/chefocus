import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { useUserProvider } from '../Utils/AppContext';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box';
import { storage } from '../Firebase';
import { updateProfilePicture } from '../Utils/API';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: '#a2d0c1',
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Profile() {
  const [image, setImage] = useState({});
  const classes = useStyles();

  const username = localStorage.getItem('username');
  const id = sessionStorage.getItem('userID');
  const photo = localStorage.getItem('photo');
  const { userID, setUserID } = useUserProvider();

  useEffect(() => {
    setUserID({ id: id, email: '', photo: photo, username: username });
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`profileImages/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => { },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('profileImages')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            localStorage.setItem('photo', url);
            const updatedUser = { ...userID, photo: url };
            setUserID(updatedUser);
            localStorage.setItem('profilePhoto', true);
            updateProfilePicture(updatedUser).then(response => {
              setUserID(userID);
            })
          })
      }
    );
  };

  return (
    <>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {photo === 'false' ? (
              <>
                <Avatar className={classes.large}>
                  <Button
                    variant="contained"
                    component="label"
                    className={classes.margin}
                  >
                    Photo
                    <input
                      type="file"
                      id="photo"
                      hidden
                      onChange={handleChange}
                    ></input>
                  </Button>
                </Avatar>
                <Button
                  variant="contained"
                  component="label"
                  className={classes.margin}
                  onClick={handleUpload}
                >
                  Submit
                </Button>
              </>
            ) : (
                <Avatar alt="Remy Sharp" className={classes.large} src={photo} />
              )}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome {username}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Profile;
