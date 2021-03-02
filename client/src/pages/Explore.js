import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  CssBaseline,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TopNavbar from '../components/TopNavbar';
import RecipeReviewCard from '../components/Card/';
import { useUserProvider } from '../Utils/AppContext';
import { getRecipes } from '../Utils/API';


import { useRecipeProvider } from '../Utils/RecipeContext';

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
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

const tileData = [
  {
    img: './images/Burger.jpg',
    title: 'Burger',
    author: 'Israel'
  },
  {
    img: './images/Pizza.jpg',
    title: 'Pizza',
    author: 'Seth'
  },
  {
    img: './images/Eggroll.jpg',
    title: 'Eggroll',
    author: 'Anthony'
  },
  {
    img: './images/Torta.jpg',
    title: 'Torta',
    author: 'Timothy'
  }
];

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
  // const { userID, setUserID } = useUserProvider();
  const { individualRecipe, setIndividualRecipe } = useRecipeProvider();

  const [recipeID, serRecipeID] = useState();

  const handleClick = (data) => {
    console.log(data);
  };

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
<<<<<<< HEAD
                  // onClick={() => {
                  //
                  // }}
                  link={recipe.id}
=======
                  onClick={() => {
                    getIndividualRecipe(recipe.id)
                      .then(({ data }) => {
                        console.log(data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });

                  }}
>>>>>>> origin
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
