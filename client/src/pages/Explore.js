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
import ReviewRecipeCard from '../components/Card/';
import { useUserProvider } from '../Utils/AppContext';
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
  const { userID, setUserID } = useUserProvider();
  console.log(userID);
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
                <ReviewRecipeCard
                  key={recipe.id}
                  recipeName={recipe.recipeName}
                  imageFood={recipe.imageFood}
                />
              );
            })}
            <GridList cellHeight={180} className={classes.gridList}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Explore;
