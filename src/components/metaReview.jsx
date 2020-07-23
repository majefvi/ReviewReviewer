import React, { Component } from "react";
import MetaReviewForm from "./metaReviewForm";
import { Card, CardContent, CardHeader } from "@material-ui/core";

class MetaReview extends Component {
  render() {
    const {
      oriReview,
      metReview,
      onMetaInputChange,
      onMetaAuthorChange,
      onMetaRatingChange,
      onMetaReviewTextChange,
      onSubmitPressed,
    } = this.props;

    return (
      <React.Fragment>
        <Card style={{ position: "relative" }}>
          <CardHeader title="Review this review!"></CardHeader>
          <CardContent>
            <MetaReviewForm
              // oriReview={oriReview}
              metReview={metReview}
              onMetaInputChange={onMetaInputChange}
              onMetaAuthorChange={onMetaAuthorChange}
              onMetaRatingChange={onMetaRatingChange}
              onMetaReviewTextChange={onMetaReviewTextChange}
              onSubmitPressed={onSubmitPressed}
            ></MetaReviewForm>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default MetaReview;
