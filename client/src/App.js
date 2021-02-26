import React, { useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SignUp from './pages/Signup';
import Submission from './pages/Submission';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StoreUser from './Utils/AppContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userID = sessionStorage.getItem('userID');
    setIsLoggedIn(!!userID);
  }, [window.location, sessionStorage.getItem('userID')]);

  console.log(isLoggedIn);

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
          {!isLoggedIn && (
            <Route>
              <Home />
            </Route>
          )}
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/submission">
            <Submission />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreUser>
  );
}

export default App;
