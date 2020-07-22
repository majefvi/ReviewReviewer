import React, { Component } from "react";
import MetaReviewForm from "./metaReviewForm";
import { Card, CardContent, CardHeader } from "@material-ui/core";

class MetaReview extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ position: "relative" }}>
          <CardHeader title="Review this review!"></CardHeader>
          <CardContent>
            <MetaReviewForm></MetaReviewForm>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default MetaReview;
