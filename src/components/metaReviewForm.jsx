import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, TextField, Button } from "@material-ui/core";

class MetaReviewForm extends Component {
  render() {
    return (
      <form name="metaReviewForm">
        <FormControl>
          <TextField
            name="metaReviewAuthor"
            id="reviewer-name"
            label="Name"
            variant="outlined"
            required
            onChange={(event) => this.props.onMetaInputChange(event)}
            value={this.props.metaReview.metaReviewAuthor}
          ></TextField>

          <Rating
            name="metaRating"
            onChange={(event) => this.props.onMetaInputChange(event)}
            value={this.props.metaReview.metaRating}
          ></Rating>

          <TextField
            name="metaReviewText"
            id="meta-review-description"
            label="Review"
            multiline
            rows={4}
            variant="outlined"
            onChange={(event) => this.props.onMetaInputChange(event)}
            value={this.props.metaReview.metaReviewText}
          ></TextField>

          <Button
            onClick={(event) => this.props.onSubmitPressed(event)}
            fullWidth
            style={{ backgroundColor: "#43b581" }}
          >
            Submit Review
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default MetaReviewForm;
