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
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getRandomOriginalReview("getrandom");
    // .then((response) => response.json())
    // .then((res) => this.setState({ data: res.express }))
    // .catch((err) => console.log(err));
  }

  getRandomOriginalReview = async (url) => {
    const response = await fetch(`/${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState((prevState) => {
      let review = { ...prevState.review };
      review = body;
      return { review };
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
              <MetaReview />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
