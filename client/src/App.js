import React, { useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SignUp from './pages/Signup';
import Submission from './pages/Submission';
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
    <StoreUser>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          {/* {!isLoggedIn && (
            <Route>
              <Home />
            </Route>
          )} */}
          <PrivateRoute exact path="/explore">
            <Explore />
          </PrivateRoute>
          <Route exact path="/submission">
            <Submission />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreUser>
  );
}

export default App;
