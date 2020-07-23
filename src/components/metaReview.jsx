import React, { Component } from "react";
import MetaReviewForm from "./metaReviewForm";
import { Card, CardContent, CardHeader } from "@material-ui/core";

class MetaReview extends Component {
  render() {
    const { metaReview, onMetaInputChange, onSubmitPressed } = this.props;

    return (
      <React.Fragment>
        <Card style={{ position: "relative" }}>
          <CardHeader title="Review this review!"></CardHeader>
          <CardContent>
            <MetaReviewForm
              metaReview={metaReview}
              onMetaInputChange={onMetaInputChange}
              onSubmitPressed={onSubmitPressed}
            ></MetaReviewForm>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default MetaReview;
