import React, { useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Explore from './pages/Explore';
// import Favorites from './pages/Favorites';
import Submission from './pages/Submission';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import Profile from './pages/Profile';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './Utils/AppContext';

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
  return (
    <div>
      <UserProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
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

              <BottomNavbar />
            </>
          </Switch>

        </BrowserRouter>
      </UserProvider>
    </div>

  );
}

export default App;
