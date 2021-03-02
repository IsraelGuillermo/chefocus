import React from "react";
import GridList from "@material-ui/core/GridList";
import "./style.css";
import { Card } from "@material-ui/core";
import Row from "../Row";
import Column from "../Column";

function GridList() {
  return (
    <Row>
      <Column>
        <Card></Card>
      </Column>

      <Column>
        <Card></Card>
      </Column>

      <Column>
        <Card></Card>
      </Column>
    </Row>
  );
}

export default GridList;
