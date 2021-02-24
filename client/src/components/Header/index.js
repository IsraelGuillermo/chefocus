import * as React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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

  const handleClickFunction = () => {
    history.push('/');
    sessionStorage.setItem('isUserLoggedIn', false);
  };

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
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
            <ListItem button>
              <ListItemText primary="LOGOUT" onClick={handleClickFunction} />
            </ListItem>
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
