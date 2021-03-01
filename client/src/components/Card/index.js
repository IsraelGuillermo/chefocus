import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  username: {
    color: '#F15C22',
    display: 'inline-block',
    padding: '10% 0',
    marginLeft: '.75rem',
    lineHeight: 1
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  avatar: {
    display: 'inline-flex',
    marginTop: '.5rem',
    marginBottom: '.5rem'
  }
}));

function RecipeReviewCard(props) {
  const classes = useStyles();
  const username = sessionStorage.getItem('username');
  const photo = sessionStorage.getItem('photo');

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.recipeName}
            height="200"
            image={props.imageFood}
            title={props.recipeName}
          />
          <CardContent>
            <Typography variant="h5" display="block">
              {props.recipeName}
            </Typography>
            <div className={classes.avatar}>
              <Avatar alt={username} className={classes.large} src={photo} />
              <Typography gutterBottom variant="subtitle1">
                <span className={classes.username}>{username}</span>
              </Typography>
            </div>
            <Typography variant="body2" color="textPrimary" component="p">
              This recipe can be prepared in {props.prepHrs} Hrs and{' '}
              {props.prepMins} Mins, and it provides {props.servings} servings!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default RecipeReviewCard;
