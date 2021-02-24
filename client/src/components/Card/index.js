import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import recipeSub from "../../pages/Submission"
require("firebase/storage")
import "./index.css";
import { PinDropSharp } from "@material-ui/icons";


class CardSub extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {userName: ""};
  }


  render() {
    const userName = this.state.userName
    return (
      <Card>
        <CardMedia>
          <recipeSub image />
          <recipeSub value={userName}>
      
          </recipeSub>
          <recipeSub setServings />
          <recipeSub setPrepHours />
          <recipeSub setPrepMinutes />
          <recipeSub setIngredients />
          <recipeSub setInstructions />
        </CardMedia>
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
