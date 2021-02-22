import React, { Component, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import data from "../../pages/Submission"
require("firebase/storage")

import "./index.css";
import { PinDropSharp } from "@material-ui/icons";


function CardSub() {


  const [userName, setUserName] = useState();
  const [imageFood, setImageFood] = useState();
  const [recipeName, setRecipeName] = useState();
  const [servings, setServings] = useState();
  const [prepHours, setPrepHours] = useState();
  const [prepMinutes, setPrepMinutes] = useState();
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();

  useEffect(() => {
    data.props.userName = userName
    data.foodList.imageFood = imageFood
    data.foodList.recipeName = recipeName
    data.foodList.servings = servings
    data.foodList.prepHours = prepHours
    data.foodList.prepMinutes = prepMinutes
    data.foodList.ingredients = ingredients
    data.foodList.instructions = instructions
  }, []);

  return (
    <Card>
      <CardMedia
        image={setImageFood}
        title={setRecipeName}
        title={setServings}
        title={setPrepHours}
        title={setPrepMinutes}
        title={setIngredients}
        title={setInstructions}
      />
      <CardHeader
        avatar={
          <Avatar>
          </Avatar>
        }
        title={setRecipeName} //title of recipe will be pulled into here.
        subheader={setUserName} //Username could be pulled here.
      />
    </Card>
  );
}

export default CardSub;
