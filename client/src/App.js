import React from 'react';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Submission from './pages/Submission';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/submission">
            <Submission />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
