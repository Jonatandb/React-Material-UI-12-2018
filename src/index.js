import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import CssBaseline from "@material-ui/core/CssBaseline";

import MyTitle from "./components/MyTitle";
import { TypographyTests, GridTests, CssBaselineTests } from "./Tests";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MyTitle
        text="The definitive guide to React Material"
        link="https://blog.logrocket.com/the-definitive-guide-to-react-material-d730c8a3e8ba"
        extra="Jonatandb tests!"
        type="h3"
      />
      <CssBaselineTests />
      <TypographyTests />
      <GridTests />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
