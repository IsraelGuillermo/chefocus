import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    root: {
        width: "auto",
    },
});

function BottomNavbar() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const [value, setValue] = React.useState(0);

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
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    } else {
        return null;
    }
}

export default BottomNavbar;