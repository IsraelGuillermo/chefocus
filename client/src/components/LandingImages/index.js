import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://source.unsplash.com/featured/?cookies,sandwiches,burritos,salads,ice_cream,veggies,pasta,pizza)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

function LandingImages() {
    const classes = useStyles();

    return (
        < Grid item xs={false} sm={4} md={7} className={classes.image} />
    )
};

export default LandingImages;