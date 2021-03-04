import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import RecipeReviewCard from '../components/Card/';
import { getRecipes } from '../Utils/API';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(10),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: '#303030',
    justifyContent: 'center'
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
    getRecipes()
      .then(({ data }) => {
        setData(data);
        setFiltered(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            placeholder="Search for a recipe"
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
