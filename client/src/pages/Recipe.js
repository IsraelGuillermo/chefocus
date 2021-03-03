import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router-dom';
import { getIndividualRecipe } from '../Utils/API';
import { useRecipeProvider } from '../Utils/RecipeContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    whiteSpace: 'pre-wrap'
  }
}));

export default function FixedContainer() {
  const classes = useStyles();
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getIndividualRecipe(id)
      .then(({ data }) => {
        setRecipe(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(recipe);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h1" component="h2" gutterBottom>
          {recipe.recipeName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Ingredients
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.paper}>
          {recipe.ingredients}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Instructions
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.paper}>
          {recipe.instructions}
        </Typography>
        <img src={recipe.imageFood} />
      </Container>
    </React.Fragment>
  );
}
