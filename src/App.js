import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./components/navbar";
import OriginalReview from "./components/originalReview";
import MetaReview from "./components/metaReview";
import "./App.css";
import { dummyOriginalReview } from "./test/dummyData.js";

class App extends Component {
  state = {
    review: {},
    metaReview: {},
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.getRandomOriginalReview("getrandom");
  }

  // componentDidUpdate() {
  //   console.log("CompDidUpdate State: ", this.state);
  // }

  getRandomOriginalReview = async (url) => {
    const response = await fetch(`/${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState((prevState) => {
      let review = { ...prevState.review };
      let metaReview = { ...prevState.metaReview };
      review = body[0];
      // console.log("revvvvv: ", review.review_product_id);
      // metaReview.originalReviewProductID = review.review_product_id;
      return { review, metaReview };
    });
  };

  postMetaReview = async (formState) => {
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

  handleMetaInputChange = (event) => {
    // console.log(event.target.value);

    const {
      target: { name, value },
    } = event;
    // console.log(name);
    // console.log(value);

    this.setState(
      (prevState) => {
        let metaReview = { ...prevState.metaReview, [name]: value };
        // metaReview = { [name]: value };
        // metaReview.name = value;
        return { metaReview };
      }
      // () => console.log("after state update: ", this.state)
    );
  };

  handleSubmitReview = (event) => {
    event.preventDefault();

    this.setState(
      (prevState) => {
        let metaReview = {
          ...prevState.metaReview,
          product_id: this.state.review.product_id,
        };
        return { metaReview };
      },
      () => this.postMetaReview(this.state.metaReview)
    );

    // let formState = this.state.metaReview;
    // console.log("formState: ", formState);
    // this.postMetaReview(formState);

    this.setState(
      (prevState) => {
        let metaReview = { ...prevState.metaReview };

        metaReview.metaReviewAuthor = "";
        metaReview.metaRating = 0;
        metaReview.metaReviewText = "";

        return { metaReview };
      }
      // () => console.log("state after form reset: ", this.state.metaReview)
    );
  };

  // Used to get dummy data without contacting express server
  getLocalDummyData = () => {
    this.setState((prevState) => {
      let review = { ...prevState.review };
      review = dummyOriginalReview;
      return { review };
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
              backgroundColor: "#23272a",
              minHeight: "100vh",
              margin: 0,
              width: "100%",
            }}
          >
            <Grid item>
              <OriginalReview review={this.state.review} />
            </Grid>
            <Grid item>
              <MetaReview
                metaReview={this.state.metaReview}
                onMetaInputChange={this.handleMetaInputChange}
                onSubmitPressed={this.handleSubmitReview}
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
