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
    const [value, setValue] = useState();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClickFunction = () => {
        history.push('/');
        sessionStorage.removeItem('userID');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('photo');
    };

    useEffect(() => {
        switch (true) {
            case window.location.pathname.includes('explore'):
                setValue('explore')
                break;
            case window.location.pathname.includes('favorites'):
                setValue('favorites')
                break;
            case window.location.pathname.includes('submission'):
                setValue('submission')
                break;
            case window.location.pathname.includes('profile'):
                setValue('profile')
                break;
            default:
                break;
        }
    }, [])

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
                    icon={<SearchRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/favorites"
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteBorderRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/submission"
                    label="Submit"
                    value="submission"
                    icon={<AddCircleOutlineRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/profile"
                    label="Profile"
                    value="profile"
                    icon={<PersonOutlineRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    onClick={handleClickFunction}
                    exact to="/"
                    label="Logout"
                    value="logout"
                    icon={<LockOutlinedIcon />} />
            </BottomNavigation>
        );
    } else {
        return null;
    }
}

export default BottomNavbar;