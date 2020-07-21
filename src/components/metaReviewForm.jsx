import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, Input, InputLabel, TextField } from "@material-ui/core";

class MetaReviewForm extends Component {
  state = {};
  render() {
    return (
      <FormControl>
        <TextField
          id="reviewer-name"
          label="Name"
          variant="outlined"
        ></TextField>

        <Rating></Rating>

        <TextField
          id="meta-review-description"
          label="Review"
          multiline
          rows={4}
          variant="outlined"
        ></TextField>
      </FormControl>
    );
  }
}

export default MetaReviewForm;
