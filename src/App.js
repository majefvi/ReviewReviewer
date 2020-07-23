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
    // .then((response) => response.json())
    // .then((res) => this.setState({ data: res.express }))
    // .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log("CompDidUpdate State: ", this.state);
  }

  getRandomOriginalReview = async (url) => {
    const response = await fetch(`/${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState((prevState) => {
      let review = { ...prevState.review };
      let metaReview = { ...prevState.metaReview };
      review = body;
      metaReview.originalReviewProductID = review.productid;
      return { review, metaReview };
    });
  };

  handleSubmitReview = (event) => {
    console.log("NEW BOY PRESSED");
    event.preventDefault();

    let formState = this.state.metaReview;
    console.log("Form state from handleSubmitReview(): ", formState);

    this.postMetaReview(formState);

    this.setState(
      (prevState) => {
        let metaReview = { ...prevState.metaReview };

        metaReview.metaReviewAuthor = "";
        metaReview.metaReviewRating = 0;
        metaReview.metaReviewText = "";

        return { metaReview };
      },
      () => console.log("state after form reset: ", this.state.metaReview)
    );
    // this.setState(
    //   {
    //     originalReviewProductID: 0,
    //     metaReviewAuthor: "",
    //     metaReviewRating: 0,
    //     metaReviewText: "",
    //   } /*,
    //   () => console.log("state after form reset: ", this.state)*/
    // );
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
    console.log(event.target.value);

    const {
      target: { name, value },
    } = event;
    console.log(name);
    console.log(value);

    this.setState(
      (prevState) => {
        let metaReview = { ...prevState.metaReview, [name]: value };
        // metaReview = { [name]: value };
        // metaReview.name = value;
        return { metaReview };
      },
      () => console.log("after state update: ", this.state)
    );
  };

  // handleMetaAuthorChange = (author) => {
  //   console.log(author);

  //   this.setState((prevState) => {
  //     let metaReview = { ...prevState.metaReview };
  //     metaReview.metaReviewAuthor = author;
  //     return { metaReview };
  //   });
  //   console.log("handleMetaAuthroChange()", this.state.metaReviewAuthor);
  // };

  handleMetaRatingChange = (rating) => {
    console.log(rating);

    this.setState((prevState) => {
      let metaReview = { ...prevState.metaReview };
      metaReview.metaReviewRating = rating;
      return { metaReview };
    });
  };

  handleMetaReviewTextChange = (reviewText) => {
    console.log(reviewText);

    this.setState((prevState) => {
      let metaReview = { ...prevState.metaReview };
      metaReview.metaReviewText = reviewText;
      return { metaReview };
    });
  };

  // Testing methods
  callBackendAPI = async (url) => {
    const response = await fetch(`/${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);

    this.setState((prevState) => {
      let review = { ...prevState.review };
      review = body;
      console.log(review.image);
      return { review };
    });

    // return body;
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
                // oriReview={this.state.review}
                metReview={this.state.metaReview}
                onMetaInputChange={this.handleMetaInputChange}
                // onMetaAuthorChange={this.handleMetaInputChange}
                // onMetaRatingChange={this.handleMetaInputChange}
                // onMetaReviewTextChange={this.handleMetaInputChange}
                // onSubmitPressed={this.handleSubmitReview}
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
