import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { getIndividualRecipe } from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
  },
  paper: {
    whiteSpace: 'pre-wrap',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column'
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '400px',
    marginBlock: '1rem'
  },
  marginBottom: {
    marginBottom: '1rem'
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
  return (
    <>
      <CssBaseline />
      <main>
        <Container maxWidth="sm">
          <div className={classes.paper}>
            <Typography variant="h2" component="h1" gutterBottom>
              {recipe.recipeName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>Prep Time: </strong>{(recipe.prepHours > 0) ? (
                <>
                  {(recipe.prepHours)} Hrs
                </>
              ) : (
                  <></>
                )
              } {(recipe.prepMinutes > 0) ? (
                <>
                  {recipe.prepMinutes} Mins
                </>
              ) : (
                  <></>
                )
              }
            </Typography>
            <Typography variant="h6">
              <strong>Servings: </strong>{(recipe.servings)}
            </Typography>
            <img src={recipe.imageFood} className={classes.img} />
            <Typography variant="h4" component="h2" gutterBottom>
              Ingredients
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={classes.marginBottom}>
              {recipe.ingredients}
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              Instructions
            </Typography>
            <Typography variant="body1" gutterBottom >
              {recipe.instructions}
            </Typography>

          </div>
        </Container>
      </main>
    </>
  );
}
