import React from 'react';
import Explore from './Explore';
import Recipe from './Recipe';
// import Favorites from './pages/Favorites';
import Submission from './Submission';
import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';
import Profile from './Profile';
import { Route } from 'react-router-dom';

function HomeRouter() {

    return (
        <>
            <TopNavbar />

            <Route exact path="/explore">
                <Explore />
            </Route>
            {/* <Route exact path="/favorites">
            <Favorites />
          </Route> */}
            <Route exact path="/submission">
                <Submission />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/recipes/:id">
                <Recipe />
            </Route>

            <BottomNavbar />
        </>
    );
}

export default HomeRouter;
