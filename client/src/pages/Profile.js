import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { useUserProvider } from '../Utils/AppContext';
import { storage } from '../Firebase';
import { updateProfilePicture } from '../Utils/API';
import { getRecipesByUser } from '../Utils/API';
import { deleteRecipe } from '../Utils/API';
import RecipeReviewCard from '../components/Card/';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: '#424242',
    padding: theme.spacing(6, 0, 4)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#303030',
    marginBottom: theme.spacing(10),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  welcome: {
    margin: '1.5rem'
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    borderColor: '#f4ac1b',
    borderStyle: 'solid',
    flexGrow: 0
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function Profile() {
  const [recipesByUser, setRecipeByUser] = useState([]);

  const [image, setImage] = useState({});
  const classes = useStyles();

  const username = sessionStorage.getItem('username');
  const id = sessionStorage.getItem('userID');
  const photo = sessionStorage.getItem('photo');
  const { userID, setUserID } = useUserProvider();

  useEffect(() => {
    getRecipesByUser(id)
      .then(({ data }) => {
        setRecipeByUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
            sessionStorage.setItem('photo', url);
            const updatedUser = { ...userID, photo: url };
            setUserID(updatedUser);
            updateProfilePicture(updatedUser);
          });
      }
    );
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item sm>
                {photo === 'false' ? (
                  <>
                    <Avatar className={classes.large}>
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
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
                      color="primary"
                      className={classes.margin}
                      onClick={handleUpload}
                    >
                      Submit
                    </Button>
                  </>
                ) : (
                    <Avatar
                      alt={username}
                      className={classes.large}
                      src={photo}
                    />
                  )}
              </Grid>
              <Grid item sm>
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="textPrimary"
                  className={classes.welcome}
                >
                  Welcome <br /> {username}!
                </Typography>
              </Grid>
              <Grid container direction="row">
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                  className={classes.welcome}
                >
                  Cook, Capture and Share your favorite recipes! Cook, Share and
                  Love!
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {recipesByUser.map((recipe) => {
            return (
              <RecipeReviewCard
                key={recipe.id}
                recipeName={recipe.recipeName}
                imageFood={recipe.imageFood}
                prepHrs={recipe.prepHours}
                prepMins={recipe.prepMinutes}
                servings={recipe.servings}
                link={recipe.id}
                photo={recipe.User.photo}
                username={recipe.User.username}
                handleDeleteEvent={() =>
                  deleteRecipe(recipe.id).then(() => {
                    refreshPage();
                  })
                }
              />
            );
          })}
        </Container>
      </main>
    </>
  );
}

export default Profile;
