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
    this.handleLoadOriginalReview();
  }

  handleLoadOriginalReview = () => {
    this.setState((prevState) => {
      let review = { ...prevState.review };

      fetch("/review")
        .then((response) => response.json())
        .then((data) => {
          review = data; // Is this correct?
          console.log(data);
        });

      // review = dummyOriginalReview;
      return { review };
    });
  };

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
