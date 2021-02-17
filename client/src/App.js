import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
