import * as React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory, NavLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    top: '50px'
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `home`, path: `/` },
  { title: `Submission`, path: `/submission` },
  { title: `explore`, path: `/explore` }
];

const Header = () => {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickFunction = () => {
    history.push('/');
    sessionStorage.removeItem('userID');
  };

  if (matches) {
    return null;
  } else {
    return (
      <AppBar position="static">
        <Toolbar>
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
                <ListItemText primary="LOGOUT" onClick={handleClickFunction} />
              </ListItem>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
};
export default Header;
