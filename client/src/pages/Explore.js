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
import RecipeReviewCard from '../components/Card/';
import { getRecipes } from '../Utils/API';
import { Input } from '@material-ui/core';

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

function Explore() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getRecipesInitially = async () => {
      try {
        await getRecipes().then(({ data }) => {
          setData(data);
          setFiltered(data);
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    getRecipesInitially();
  }, []);

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.recipeName.toLowerCase().includes(result.toLowerCase())
    );
    setData(results);
  }, [result]);

  const handleOnChange = (e) => {
    setResult(e.target.value);
  };
  const classes = useStyles();
  console.log(result);
  console.log(data);
  console.log(filtered);

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <div className={classes.paper}>
          <div>
            <h1>Explore Recipes</h1>
          </div>
          <Input
            fullWidth={true}
            onChange={handleOnChange}
            placeholder="Search for an recipe"
          ></Input>

          <div className={classes.root}>
            {data?.map((recipe) => {
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
