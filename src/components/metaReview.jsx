import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

class MetaReview extends Component {
  render() {
    return (
      <Card style={{ position: "relative" }}>
        <CardHeader title="Test" subheader="Test"></CardHeader>
        <CardContent>'Also a test'</CardContent>
      </Card>
    );
  }
}

export default MetaReview;
