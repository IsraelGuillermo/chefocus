import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import "./style.css";

function RecipeCard() {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="" //title of recipe will be pulled into here.
        title="" //alt text will go here.
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
export default RecipeCard;