import React, { Component, useEffect, useState, setState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import recipeSub from "../../pages/Submission"
require("firebase/storage")
import "./index.css";
import { PinDropSharp } from "@material-ui/icons";


class CardSub extends Component {


  // const [userName, setUserName] = useState({
  //   userName: ""
  // });
  // const [imageFood, setImageFood] = useState();
  // const [recipeName, setRecipeName] = useState();
  // const [servings, setServings] = useState();
  // const [prepHours, setPrepHours] = useState();
  // const [prepMinutes, setPrepMinutes] = useState();
  // const [ingredients, setIngredients] = useState();
  // const [instructions, setInstructions] = useState();

  // useEffect(() => {
  //   setUserName()
  //   console.log("Username: " + foodList.userName)

  //   foodList.imageFood = imageFood
  //   foodList.recipeName = recipeName
  //   foodList.servings = servings
  //   foodList.prepHours = prepHours
  //   foodList.prepMinutes = prepMinutes
  //   foodList.ingredients = ingredients
  //   foodList.instructions = instructions
  // }, []);

  render() {
    return (
      <Card>
        <CardMedia
          // image={}
          title={setUserName}
          title={recipeSub.setServings}
          title={recipeSub.setPrepHours}
          title={recipeSub.setPrepMinutes}
          title={recipeSub.setIngredients}
          title={recipeSub.setInstructions}
        />
        <CardHeader
          avatar={
            <Avatar>
            </Avatar>
          }
          title={recipeSub.setRecipeName} //title of recipe will be pulled into here.
          subheader={recipeSub.setUserName} //Username could be pulled here.
        />
      </Card>
    );
  }
}

export default CardSub;
