import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

class OriginalReview extends Component {
  render() {
    const { review } = this.props;

    return (
      <Card style={{ position: "relative" }}>
        <CardHeader
          title={review.product}
          subheader={review.author}
        ></CardHeader>
        <CardContent>{review.description}</CardContent>
      </Card>
    );
  }
}

export default OriginalReview;
