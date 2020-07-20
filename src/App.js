import React from "react";
import OriginalReview from "./components/originalReview";
import MetaReview from "./components/metaReview";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <OriginalReview />
      <MetaReview />
    </React.Fragment>
  );
}

export default App;
