import React, { Component } from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

class OriginalReview extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      productName: "",
      productId: 0,
      manufacturer: "",
      reviewText: "",
    };
  }

  render() {
    const { review } = this.props;

    return (
      <Card style={{ position: "relative" }}>
        <CardHeader
          title={review.name}
          subheader={review.manufacturer}
        ></CardHeader>
        {/* <img src={review.image} alt="" /> */}
        <CardMedia
          image={review.image}
          style={{ height: "35vh", width: "auto" }}
        />
        <CardContent>{review.review}</CardContent>
      </Card>
    );
  }
}

export default OriginalReview;
