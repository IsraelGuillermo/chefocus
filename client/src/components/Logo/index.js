import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    logo: {
        marginBottom: theme.spacing(5),
        padding: '1rem',
    }
}));

function Logo() {
    const classes = useStyles();

    return (

        <Box className={classes.logo}>
            <img
                src="./icons/CHEFocus_reverse.png"
                alt="CHEFocus Logo"
                width="100%"
            />
        </Box>
    )
};

export default Logo;