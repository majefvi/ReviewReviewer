import React, { Component } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

class OriginalReview extends Component {
  render() {
    const { review } = this.props;

    return (
      <Card style={{ position: "relative" }}>
        <CardHeader
          title={review.name}
          subheader={review.manufacturer}
        ></CardHeader>
        <img src={review.image} />
        {/* <CardMedia image={review.image} /> */}
        <CardContent>{review.review}</CardContent>
      </Card>
    );
  }
}

export default OriginalReview;
