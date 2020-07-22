import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, TextField, Button } from "@material-ui/core";

class MetaReviewForm extends Component {
  state = {};

  constructor() {
    super();
    this.state = { author: "", starRating: 0, starReview: "" };
  }

  // handleChange = (e) => {
  //   const { target: { name, value } } = e
  //   this.setState({
  //     [name]: value,
  //   })
  // };

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
      starReview: userInput,
    });
  };

  handleSubmitReview = (event) => {
    event.preventDefault();
    // alert(this.state.author);
    // alert(this.state.starRating);
    // alert(this.state.review);

    let formState = this.state;
    console.log("Form state from handleSubmitReview(): ", this.state);

    this.postReview(formState);

    // this.props.onSubmitReview(this.state.buffer);
    this.setState(
      {
        author: "",
        starRating: 0,
        starReview: "",
      },
      () => console.log("state after form reset: ", this.state)
    );
  };

  postReview = async (formState) => {
    console.log("Post initiated by postReview()");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formState }),
    };
    const response = await fetch("/savemetareview", requestOptions);
    const data = await response.json();
    console.log("using example: ", data);
  };

  render() {
    const { author, starRating, starReview } = this.state;

    return (
      <form>
        <FormControl>
          <TextField
            id="reviewer-name"
            label="Name"
            variant="outlined"
            required
            onChange={this.handleNameChange}
            value={author}
          ></TextField>

          <Rating
            onChange={this.handleRatingChange}
            value={starRating}
          ></Rating>

          <TextField
            id="meta-review-description"
            label="Review"
            multiline
            rows={4}
            variant="outlined"
            onChange={this.handleReviewChange}
            value={starReview}
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
