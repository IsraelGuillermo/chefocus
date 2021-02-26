import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

const useStyles = makeStyles({
    root: {
        width: "auto",
    },
});

function BottomNavbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

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
                    activeClassName="is-active"
                    icon={<SearchRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/favorites"
                    label="Favorites"
                    value="favorites"
                    activeClassName="is-active"
                    icon={<FavoriteBorderRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/submission"
                    label="Submit"
                    value="submission"
                    activeClassName="is-active"
                    icon={<AddCircleOutlineRoundedIcon />} />
                <BottomNavigationAction
                    component={NavLink}
                    exact to="/profile"
                    label="Profile"
                    value="profile"
                    activeClassName="is-active"
                    icon={<PersonOutlineRoundedIcon />} />
            </BottomNavigation>
        );
    } else {
        return null;
    }
}

export default BottomNavbar;