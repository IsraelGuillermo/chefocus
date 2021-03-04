import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ConfirmDelete from '../ConfirmDelete/';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275
  },
  username: {
    color: '#F15C22',
    display: 'inline-block',
    padding: '10% 0',
    marginLeft: '.75rem',
    lineHeight: 1,
    fontWeight: 500
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderColor: '#f4ac1b',
    borderStyle: 'solid',
    borderWidth: '2px'
  },
  avatar: {
    display: 'inline-flex',
    marginTop: '.5rem',
    marginBottom: '.5rem'
  }
}));

function RecipeReviewCard(props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const profilePage = window.location.pathname.includes('profile');

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
            height="275"
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
              {props.prepMins} Mins and it provides enough servings for{' '}
              {props.servings}!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button
            size="small"
            color="primary"
            onClick={props.onClick}
            value={props.value}
          >
            Go to Recipe
          </Button> */}
          <Link to={'/recipes/' + props.link}>
            <span>Click ME</span>
          </Link>
          <>
            {profilePage ? (
              <div>
                <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
                <ConfirmDelete
                  title="Delete Post?"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={props.handleDeleteEvent}
                >
                  Are you sure you want to delete this post?
                </ConfirmDelete>
              </div>

              /* <Button onClick={props.handleDeleteEvent} size="small" color="primary">
                Delete
              </Button> */
            ) : <Fragment></Fragment>}
          </>

        </CardActions>
      </Card>
    </>
  );
}

export default RecipeReviewCard;
