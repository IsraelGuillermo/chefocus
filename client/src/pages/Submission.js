import React, { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "firebase";
require("firebase/storage");
import '@firebase/storage';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// firebaseConfig
const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: "chefocus-50ce1.appspot.com",
    messagingSenderId: process.env.MESSAGE_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// init firebase
firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();
const firebaseImg = storageRef.child("images");

function Submission() {
    
    const classes = useStyles();
    // Firebase Code for submitting picture and food data

    function handleUploadClick() {
        // firebase code to POST/Upload pictures, then download to/from DB
        let file = firebaseImg

        const foodList = {
            userName: "",
            imageFood: firebaseImg,
            recipeName: "",
            servings: 0,
            prepHours: 0,
            prepMinutes: 0,
            ingredients: "",
            instructions: ""
        }

        document.getElementById("#userName") = foodList.userName
        document.getElementById("#recipeName") = foodList.recipeName
        document.getElementById("#prepHours") = foodList.prepHours
        document.getElementById("#prepMinutes") = foodList.prepMinutes
        document.getElementById("#ingredients") = foodList.ingredients
        document.getElementById("#instructions") = foodList.instructions
        document.getElementById("#photo") = foodList.imageFood


        const uploadTask = storageRef.child("images").put(file)

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log("Error :>> " + error)
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        )
    }


    // window.location.href = "/explore";

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Submit A Recipe
                </Typography>
                <form className={classes.form} noValidate autoComplete='off'>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="recipeName"
                        label="Recipe Name"
                        name="recipeName"
                        autoFocus
                    />
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                id="servings"
                                label="Servings"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="prepHours"
                                label="Prep Hours"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="prepMinutes"
                                label="Prep Minutes"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ingredients"
                        label="Ingredients"
                        type="text"
                        id="ingredients"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="instructions"
                        label="Instructions"
                        type="text"
                        id="instructions"
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Photo
                        <input
                            type="file"
                            hidden
                            id="photo"
                        />
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleUploadClick}
                        href={"/explore"}
                    >
                        Create Recipe
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Submission;