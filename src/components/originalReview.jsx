import React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

const OriginalReview = ({ review }) => {
  return (
    <Card style={{ position: "relative" }}>
      <CardHeader
        title={review.product_title}
        subheader={review.review_headline}
      ></CardHeader>
      {/* <img src={review.image} alt="" /> */}
      <CardMedia
        image={review.image}
        style={{ height: "35vh", width: "auto" }}
      />
      <CardContent>{review.review_body}</CardContent>
      <CardContent>{review.review_date}</CardContent>
    </Card>
  );
};

export default OriginalReview;
