import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import RecipeReviewCard from '../components/Card/';
import { getRecipes } from '../Utils/API';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#303030'
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

function Explore() {
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    getRecipes()
      .then(({ data }) => {
        console.log(data);
        setAllResults(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <div className={classes.paper}>
          <div>
            <h1>Explore Recipes</h1>
          </div>

          <div className={classes.root}>
            {allResults?.map((recipe) => {
              return (
                <RecipeReviewCard
                  key={recipe.id}
                  value={recipe.id}
                  recipeName={recipe.recipeName}
                  imageFood={recipe.imageFood}
                  prepHrs={recipe.prepHours}
                  prepMins={recipe.prepMinutes}
                  servings={recipe.servings}
                  link={recipe.id}
                  photo={recipe.User.photo}
                  username={recipe.User.username}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Explore;
