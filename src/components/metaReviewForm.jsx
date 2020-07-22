import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, TextField, Button } from "@material-ui/core";

class MetaReviewForm extends Component {
  state = {};

  constructor() {
    super();
    this.state = { author: "", starRating: 0, starReview: "" };
  }

  handleNameChange = (event) => {
    const userInput = event.target.value;
    this.setState({
      author: userInput,
    });
  };

  handleRatingChange = (event) => {
    const userInput = event.target.value;
    this.setState({
      starRating: userInput,
    });
  };

  // Get data from all inputs and build object from it
  handleReviewChange = (event) => {
    const userInput = event.target.value;
    this.setState({
      review: userInput,
    });
  };

  handleSubmitReview = (event) => {
    event.preventDefault();
    // alert(this.state.author);
    // alert(this.state.starRating);
    // alert(this.state.review);

    let formState = this.state;
    console.log("Form state: ", this.state);

    this.postReview(formState);

    // this.props.onSubmitReview(this.state.buffer);
    this.setState({
      author: "",
      starRating: 0,
      review: "",
    });
  };

  postReview = async (formState) => {
    console.log("Post initiated");
    await fetch("/savemetareview", formState).then((err, res) => {
      if (err) return alert("Data wasn't saved");
      return alert("Successfully submitted");
    });
  };

  render() {
    const { buffer } = this.state;

    return (
      <form>
        <FormControl>
          <TextField
            id="reviewer-name"
            label="Name"
            variant="outlined"
            required
            onChange={this.handleNameChange}
          ></TextField>

          <Rating onChange={this.handleRatingChange}></Rating>

          <TextField
            id="meta-review-description"
            label="Review"
            multiline
            rows={4}
            variant="outlined"
            onChange={this.handleReviewChange}
          ></TextField>

          <Button
            onClick={this.handleSubmitReview}
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
