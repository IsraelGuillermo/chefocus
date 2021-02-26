import React, { useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Explore from './pages/Explore';
// import Favorites from './pages/Favorites';
import Submission from './pages/Submission';
// import Profile from './pages/Profile';
import BottomNavbar from './components/BottomNavbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StoreUser from './Utils/AppContext';

function PrivateRoute({ children, ...rest }) {
  const userID = sessionStorage.getItem('userID');

  return (
    <Route {...rest} render={() => {
      return !!userID
        ? children
        : <Redirect to='/' />
    }} />
  )
}

function App() {

  return (
    <div>
      <StoreUser>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <>
              <PrivateRoute exact path="/explore">
                <Explore />
              </PrivateRoute>
              {/* <PrivateRoute exact path="/favorites">
            <Favorites />
          </PrivateRoute> */}
              <PrivateRoute exact path="/submission">
                <Submission />
              </PrivateRoute>
              {/* <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute> */}
              <BottomNavbar />
            </>
          </Switch>

        </BrowserRouter>
      </StoreUser>

    </div>
  );
}

export default App;
