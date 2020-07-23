import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, TextField, Button } from "@material-ui/core";

class MetaReviewForm extends Component {
  // state = {};

  // constructor() {
  //   super();
  // }

  // handleChange = (e) => {
  //   const { target: { name, value } } = e
  //   this.setState({
  //     [name]: value,
  //   })
  // };

  // handleProductId = (event) => {
  //   const prodId = event.target.value;
  //   this.setState({
  //     productid: prodId,
  //   });
  // };

  // handleNameChange = (event) => {
  //   const userInput = event.target.value;
  //   return userInput;
  //   // this.setState({
  //   //   metaReviewAuthor: userInput,
  //   // });
  // };

  // handleRatingChange = (event) => {
  //   const userInput = event.target.value;
  //   this.setState({
  //     metaReviewRating: userInput,
  //   });
  // };

  // Get data from all inputs and build object from it
  // handleReviewChange = (event) => {
  //   const userInput = event.target.value;
  //   this.setState({
  //     metaReviewText: userInput,
  //   });
  // };

  // handleSubmitReview = (event) => {
  //   event.preventDefault();

  //   let formState = this.state;
  //   console.log("Form state from handleSubmitReview(): ", this.state);

  //   this.postReview(formState);

  //   // this.props.onSubmitReview(this.state.buffer);
  //   this.setState(
  //     {
  //       originalReviewProductID: 0,
  //       metaReviewAuthor: "",
  //       metaReviewRating: 0,
  //       metaReviewText: "",
  //     } /*,
  //     () => console.log("state after form reset: ", this.state)*/
  //   );
  // };

  // postReview = async (formState) => {
  //   console.log("Post initiated by postReview()");
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ formState }),
  //   };
  //   const response = await fetch("/savemetareview", requestOptions);
  //   const data = await response.json();
  //   console.log("using example: ", data);
  // };

  render() {
    // const { metaReviewAuthor, metaReviewRating, metaReviewText } = this.state;
    // const { oriReview } = this.props;

    // this.state.originalReviewProductID = oriReview.productid;
    // console.log(oriReview.productid);
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
            value={this.props.metReview.metaReviewAuthor}
          ></TextField>

          <Rating
            name="metaRating"
            onChange={(event) => this.props.onMetaInputChange(event)}
            value={this.props.metReview.metaReviewRating}
          ></Rating>

          <TextField
            name="metaReviewText"
            id="meta-review-description"
            label="Review"
            multiline
            rows={4}
            variant="outlined"
            onChange={(event) => this.props.onMetaInputChange(event)}
            value={this.props.metReview.metaReviewText}
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
