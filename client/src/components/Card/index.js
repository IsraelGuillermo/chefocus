import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
require("firebase/storage")

import "./style.css";

function Card() {

  storage = firebase.storage().ref();
  firebaseImg = storage.child("images");

  foodList = {
    imageFood: firebaseImg,
    recipeName: "",
    servings: "",
    prepHours: 0,
    prepMinutes: 0,
    ingredients: "",
    instructions: ""
  }

  handleUploadClick = event => {
    event.preventDefault();
    // firebase code to POST/Upload pictures to DB
    const uploadTask = storageRef.child(imageFood).put(file)

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
        console.log("Error :>>" + error)
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

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={foodList.imageFood} //title of recipe will be pulled into here.
        title={foodList.recipeName}
        title={foodList.servings}
        title={foodList.prepHours}
        title={foodList.prepMinutes}
        title={foodList.ingredients}
        title={foodList.instructions}
      />
      <CardHeader
        avatar={
          <Avatar>
          </Avatar>
        }
        title=" " //title of recipe will be pulled into here.
        subheader="" //Username could be pulled here.
      />
    </Card>
  );
}

export default Card;
