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
    minWidth: '15rem',
    maxWidth: '20rem'
  },
  logo: {
    padding: '1rem',
    margin: 'auto',
    textAlign: 'center',
    minWidth: '15rem',
    maxWidth: '15rem',
  },
  logoHorizontallyCenter: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
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
    return (
      <AppBar position="sticky">
        <Toolbar style={{ minHeight: '75px' }}>
          <Box className={classes.logoHorizontallyCenter}>
            <img
              src="./icons/CHEFocus_headerlogo.png"
              alt="CHEFocus Logo"
              width="100%"
              className={classes.logo}
            />
          </Box>
        </Toolbar>
      </AppBar>
    );
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
          <Container maxWidth="sm" className={classes.navbarDisplayFlex}>
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
