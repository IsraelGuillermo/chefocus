import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Data from "../../pages/Submission"
require("firebase/storage")

import "./index.css";

function CardSub() {

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={Data.Submission.foodList.imageFood}
        title={Data.Submission.foodList.recipeName}
        title={Data.Submission.foodList.servings}
        title={Data.Submission.foodList.prepHours}
        title={Data.Submission.foodList.prepMinutes}
        title={Data.Submission.foodList.ingredients}
        title={Data.Submission.foodList.instructions}
      />
      <CardHeader
        avatar={
          <Avatar>
          </Avatar>
        }
        title={foodList.recipeName} //title of recipe will be pulled into here.
        subheader={foodList.userName} //Username could be pulled here.
      />
    </Card>
  );
}

export default CardSub;
