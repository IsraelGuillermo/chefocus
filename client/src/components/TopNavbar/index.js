import * as React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Box
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory, NavLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    top: '50px',
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  image: {
    padding: '1rem',
    float: 'left',
    minWidth: '10rem',
    maxWidth: '20rem'
  }
});

const navLinks = [
  { title: `Explore`, path: `/explore` },
  { title: `Favorites`, path: `/favorites` },
  { title: `Submit`, path: `/submission` },
  { title: `Profile`, path: `/profile` }
];

const TopNavbar = () => {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickFunction = () => {
    history.push('/');
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('photo');
  };

  if (matches) {
    return null;
  } else {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Box className={classes.image}>
            <img
              src="./icons/CHEFocus_headerlogo.png"
              alt="CHEFocus Logo"
              width="100%"
            />
          </Box>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <NavLink to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </NavLink>
              ))}
              <ListItem button>
                <ListItemText primary="LOGOUT" onClick={handleClickFunction} className={classes.linkText} />
              </ListItem>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
};
export default TopNavbar;
