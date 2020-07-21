import React, { Component } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  title: {
    color: "red",
  },
});

class MatBox extends Component {
  render() {
    const classes = useStyles();
    const { review } = this.props;

    console.log(review);

    return (
      <Box component="span" border={1}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.title}
            title={review.product}
            subheader={review.author}
          ></CardHeader>
          <CardContent>{review.description}</CardContent>
        </Card>
      </Box>
    );
  }
}

export default MatBox;
