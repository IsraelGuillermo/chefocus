import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ConfirmDelete from '../ConfirmDelete/';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    margin: "1rem",
    borderStyle: "solid",
    borderWidth: '2px',
    borderColor: '#F15C22',
    boxShadow: [
      '0px 2px 4px 0px rgb(0 0 0 /20%)',
      '0px 4px 5px 0px rgb(0 0 0 /14%)',
      '0px 1px 10px 0px rgb(0 0 0 /12%)'
    ]
  },
  username: {
    color: '#F15C22',
    display: 'flex',
    marginTop: '6px',
    marginBottom: '.5rem',
    marginLeft: '.75rem',
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
    display: 'flex',
    marginTop: '.5rem',
    marginBottom: '.5rem'
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '250px'
  },
  cardContent: {
    padding: "16px 16px 0px 16px"
  }
}));

function RecipeReviewCard(props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const profilePage = window.location.pathname.includes('profile');

  const classes = useStyles();

  const placeholder = () => {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  };

  return (
    <>
      <Card className={classes.root}>
<<<<<<< HEAD
        <CardActionArea>
          <LazyLoadImage
            component="img"
            alt={props.recipeName}
            height="275"
            width="275"
            src={props.imageFood}
            effect="blur"
            delayTime={1000}
            beforeLoad={placeholder}
            // visibleByDefault={image.src == {props.imageFood}}

            // title={props.recipeName}
          />
          <CardContent>
            <Typography variant="h5" display="block">
              {props.recipeName}
            </Typography>
            <div className={classes.avatar}>
              <Avatar
                alt={props.username}
                className={classes.large}
                src={props.photo}
              />
              <Typography variant="subtitle1">
                <span className={classes.username}>{props.username}</span>
              </Typography>
            </div>
            <Typography variant="body2" color="textPrimary" component="p">
              This recipe can be prepared in {props.prepHrs} Hrs and{' '}
              {props.prepMins} Mins and it provides enough servings for{' '}
              {props.servings}!
=======
        <LazyLoadImage
          alt={props.recipeName}
          src={props.imageFood}
          effect="blur"
          className={classes.img}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" display="block">
            {props.recipeName}
          </Typography>
          <div className={classes.avatar}>
            <Avatar
              alt={props.username}
              className={classes.large}
              src={props.photo}
              height='40px'
              width='40px'
            />
            <Typography variant="subtitle1">
              <span className={classes.username}>{props.username}</span>
>>>>>>> develop
            </Typography>
          </div>
          <Typography variant="subtitle1">
            <strong>Prep Time: </strong>{(props.prepHrs > 0) ? (
              <>
                {props.prepHrs} Hrs
                </>
            ) : (
                <></>
              )
            } {(props.prepMins > 0) ? (
              <>
                {props.prepMins} Mins
                </>
            ) : (
                <></>
              )
            }
          </Typography>
          <Typography variant="subtitle1">
            <strong>Servings: </strong>{(props.servings)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to={'/recipes/' + props.link}>
            <Tooltip TransitionComponent={Zoom} title="View Recipe" arrow>
              <IconButton
                aria-label="view recipe"
              >
                <RestaurantMenuRoundedIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <>
            {profilePage ? (
              <div>
                <Tooltip TransitionComponent={Zoom} title="Delete" arrow>
                  <IconButton
                    aria-label="delete"
                    onClick={() => setConfirmOpen(true)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <ConfirmDelete
                  title="Delete Recipe?"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={props.handleDeleteEvent}
                >
                  <strong>Are you sure you want to delete this recipe?</strong>
                </ConfirmDelete>
              </div>
            ) : (
                <Fragment>
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Add To Favorites"
                    arrow
                    disableFocusListener={true}
                    disableHoverListener={true}
                    disableTouchListener={true}>
                    <span>
                      <IconButton
                        aria-label="add to favorites"
                        disabled={true}
                      >
                        <FavoriteBorderRoundedIcon />
                      </IconButton>
                    </span>
                  </Tooltip>
                </Fragment>
              )}
          </>
        </CardActions>
      </Card>
    </>
  );
}

export default RecipeReviewCard;
