import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function RecipeReviewCard() {
  const [recipeForm, setRecipeForm] = useState({
    imageFood: '',
    recipeName: '',
    servings: 0,
    prepHours: 0,
    prepMinutes: 0,
    ingredients: '',
    instructions: ''
  });

  const [allResults, setAllResults] = useState([])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function getCardData() {
    fetch('/api/getRecipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAllResults(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  getCardData();

  return (
    <Card className={classes.root}>
      {allResults.map((recipe) => (
       <>  
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={(recipe.recipeName)}
        subheader="Date of Recipe"
      />
      <CardMedia
        className={classes.media}
        image={`${recipe.imageFood}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.imageFood}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Recipe: </Typography>
          <Typography paragraph>{/* First bit of instructions */}</Typography>
          <Typography paragraph>{/* Recipe */}</Typography>
          <Typography paragraph>{/* Instructions */}</Typography>
          <Typography>{/* Last Instructions */}</Typography>
        </CardContent>
      </Collapse>
      </>
      ))}
    </Card>
  );
}

export default RecipeReviewCard;
