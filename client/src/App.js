import React, { useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Explore from './pages/Explore';
import Recipe from './pages/Recipe';
// import Favorites from './pages/Favorites';
import Submission from './pages/Submission';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import Profile from './pages/Profile';
import HomeRouter from './pages/HomeRouter';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './Utils/AppContext';
import { RecipeProvider } from './Utils/RecipeContext';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function PrivateRoute({ children, ...rest }) {
  const userID = sessionStorage.getItem('userID');

  return (
    <Route
      {...rest}
      render={() => {
        return !!userID ? children : <Redirect to="/" />;
      }}
    />
  );
}

function App() {
  const [theme, setTheme] = useState({
    palette: {
      type: 'dark',
      primary: {
        main: '#F15C22'
      }
    }
  });

  const muiTheme = createMuiTheme(theme);

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <UserProvider>
          <RecipeProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <PrivateRoute>
                  <HomeRouter />
                </PrivateRoute>
              </Switch>
            </BrowserRouter>
          </RecipeProvider>
        </UserProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
