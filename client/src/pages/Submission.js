import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './css/submissionStyle.css';

import { TextsmsTwoTone } from '@material-ui/icons';

import { storage } from '../Firebase';
import { submitRecipe } from '../Utils/API';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Form() {
  let history = useHistory();
  const [foodPhoto, setFoodPhoto] = useState();
  const [recipeSubmit, setRecipeSubmit] = useState({
    imageFood: '',
    recipeName: '',
    servings: 0,
    prepHours: 0,
    prepMinutes: 0,
    ingredients: '',
    instructions: ''
  });

  const classes = useStyles();

  function firebase() {
    storageRef = firebaseApp.storage().ref();
    firebaseImg = storageRef.child('images');
  }

  // Firebase Code for submitting picture and food data
  function handleUploadClick(e) {
    // firebase code to POST/Upload pictures, then download to/from DB
    e.preventDefault();
    const uploadTask = storage.ref(`images/${foodPhoto.name}`).put(foodPhoto);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(foodPhoto.name)
          .getDownloadURL()
          .then((url) => {
            const updatedRecipe = {
              ...recipeSubmit,
              imageFood: url
            };
            console.log(updatedRecipe);
            setRecipeSubmit(updatedRecipe);
            submitRecipe(updatedRecipe);
          })
          .then(() => {
            history.push('/explore');
          });
      }
    );
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setFoodPhoto(e.target.files[0]);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Submit A Recipe 🥘
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            multiline
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Recipe Name"
            name="recipeName"
            autoFocus
            onChange={(event) => {
              setRecipeSubmit({
                ...recipeSubmit,
                recipeName: event.target.value
              });
            }}
            value={recipeSubmit.recipeName}
          ></TextField>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                id="servings"
                label="Servings"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(event) => {
                  setRecipeSubmit({
                    ...recipeSubmit,
                    servings: event.target.value
                  });
                }}
                value={recipeSubmit.servings}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="prepHours"
                label="Prep Hours"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(event) => {
                  setRecipeSubmit({
                    ...recipeSubmit,
                    prepHours: event.target.value
                  });
                }}
                value={recipeSubmit.prepHours}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="prepMinutes"
                label="Prep Minutes"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(event) => {
                  setRecipeSubmit({
                    ...recipeSubmit,
                    prepMinutes: event.target.value
                  });
                }}
                value={recipeSubmit.prepMinutes}
              />
            </Grid>
          </Grid>
          <TextField
            autoCapitalize="words"
            multiline
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="ingredients"
            label="Ingredients"
            type="text"
            id="ingredients"
            onChange={(event) => {
              setRecipeSubmit({
                ...recipeSubmit,
                ingredients: event.target.value
              });
            }}
            value={recipeSubmit.ingredients}
          />
          <TextField
            multiline
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="instructions"
            label="Instructions"
            type="text"
            id="instructions"
            onChange={(event) => {
              setRecipeSubmit({
                ...recipeSubmit,
                instructions: event.target.value
              });
            }}
            value={recipeSubmit.instructions}
          />
          <Button variant="contained" component="label">
            Upload Photo
            <input type="file" hidden id="photo" onChange={handleInputChange} />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleUploadClick}
            // href={'/explore'}
          >
            Create Recipe
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Form;
