import React, { Component } from "react";
import MetaReviewForm from "./metaReviewForm";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

class MetaReview extends Component {
  render() {
    return (
      <Card style={{ position: "relative" }}>
        <CardHeader title="Review this review!"></CardHeader>
        <CardContent>
          <MetaReviewForm></MetaReviewForm>
        </CardContent>
      </Card>
    );
  }
}

export default MetaReview;
