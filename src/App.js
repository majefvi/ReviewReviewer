import React, { Component } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import OriginalReview from "./components/originalReview";
import MetaReview from "./components/metaReview";
import "./App.css";
import { dummyOriginalReview } from "./test/dummyData.js";

// Figure out how to get this working
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

class App extends Component {
  state = {
    review: {},
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.handleLoadOriginalReview();
    this.callBackendAPI("harry", "potter")
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }

  handleLoadOriginalReview = () => {
    this.setState((prevState) => {
      let review = { ...prevState.review };

      fetch("/")
        .then((response) => response.json())
        .then((data) => {
          review = data; // Is this correct?
          console.log(data);
        });

      // review = dummyOriginalReview;
      return { review };
    });
  };

  callBackendAPI = async (h, p) => {
    const response = await fetch(`/${h}${p}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // getOriginalReview = async () => {
  //   const variablehi = await //--> function that goes here to finish
  // }

  render() {
    return (
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <OriginalReview review={this.state.review} />
        </Grid>
        <Grid item>
          <MetaReview />
        </Grid>
      </Grid>
    );
  }
}

export default App;
