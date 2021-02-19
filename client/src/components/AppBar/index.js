import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";

function BottomAppBar() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Icon>home</Icon>
          <Icon>add</Icon>
          <Icon>language</Icon>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomAppBar;
