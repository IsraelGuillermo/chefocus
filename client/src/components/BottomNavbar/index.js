import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory, NavLink } from 'react-router-dom';
import { BottomNavigation } from '@material-ui/core/';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        bottom: 0,
    },
});

function BottomNavbar() {
    let history = useHistory();
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const [active, setActive] = useState({
        activeButton: " "
    })

    // Mui-selected active

    useEffect(() => {
        if (window.location.pathname == "/profile")
           setActive({
               activeButton: "Mui-selected active"
           })
    }, [])

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClickFunction = () => {
        history.push('/');
        sessionStorage.removeItem('userID');
        localStorage.removeItem('username');
        localStorage.removeItem('photo');
    };

    if (matches) {
        return (
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/explore"
                    label="Explore"
                    value="explore"
                    // activeStyle={{
                    //     color: '#3f51b5'
                    // }}
                    icon={<SearchRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/favorites"
                    label="Favorites"
                    value="favorites"
                    // activeStyle={{
                    //     color: '#3f51b5'
                    // }}
                    icon={<FavoriteBorderRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/submission"
                    label="Submit"
                    value="submission"
                    // activeStyle={{
                    //     color: '#3f51b5',
                    // }}
                    icon={<AddCircleOutlineRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/profile"
                    label="Profile"
                    value="profile"
                    id="test"
                    className={active.activeButton}
                    // activeStyle={{
                    //     color: '#3f51b5'
                    // }}
                    icon={<PersonOutlineRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    onClick={handleClickFunction}
                    exact to="/"
                    label="Logout"
                    value="logout"
                    // activeStyle={{
                    //     color: '#3f51b5'
                    // }}
                    icon={<LockOutlinedIcon />} />
            </BottomNavigation>
        );
    } else {
        return null;
    }
}

export default BottomNavbar;