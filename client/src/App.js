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
                <Route path="*">
                  <Redirect to='/' />
                </Route>
                <>
                  <TopNavbar />

                  <PrivateRoute exact path="/explore">
                    <Explore />
                  </PrivateRoute>
                  {/* <PrivateRoute exact path="/favorites">
            <Favorites />
          </PrivateRoute> */}
                  <PrivateRoute exact path="/submission">
                    <Submission />
                  </PrivateRoute>
                  <PrivateRoute exact path="/profile">
                    <Profile />
                  </PrivateRoute>
                  <PrivateRoute exact path="/recipes/:id">
                    <Recipe />
                  </PrivateRoute>
                  <BottomNavbar />
                </>
              </Switch>
            </BrowserRouter>
          </RecipeProvider>
        </UserProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
