import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import "./style.css";

class List extends Component {

  state = {
    imageFood: "",
    recipeTitle: ""
  }

  componentDidMount() {
    // empty for now until we decide what to display
  }

  handleUploadClick = event => {
    event.preventDefault();
    // firebase code to POST/Upload pictures to DB
    const uploadTask = storageRef.child().put(file)

    uploadTast.on("state_changed", 
      (snapshot) => {
        
      }
    )
  }


  render() {
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={this.state.imageFood} //title of recipe will be pulled into here.
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

}
export default List;