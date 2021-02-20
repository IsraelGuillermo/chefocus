import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CssBaseline from '@material-ui/core/CssBaseline';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


// import image from '../images/';

const tileData = [
    {
        img: "./images/Burger.jpg",
        title: 'Burger',
        author: 'Israel',
    },
    {
        img: "./images/Pizza.jpg",
        title: 'Pizza',
        author: 'Seth',
    },
    {
        img: "./images/Eggroll.jpg",
        title: 'Eggroll',
        author: 'Anthony',
    },
    {
        img: "./images/Torta.jpg",
        title: 'Torta',
        author: 'Timothy',
    },
];

function Explore() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="m">
            <CssBaseline />
            <div className={classes.paper}>
                <div>
                    <h1>Explore Recipes</h1>
                </div>

                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>by: {tile.author}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </Container>
    );
}

export default Explore;