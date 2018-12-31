import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import CssBaseline from "@material-ui/core/CssBaseline";

import Title from "./Title";
import { TypographyTests } from "./Tests";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Title
        text="The definitive guide to React Material"
        link="https://blog.logrocket.com/the-definitive-guide-to-react-material-d730c8a3e8ba"
        extra="Jonatandb tests!"
        type="h3"
      />
      <TypographyTests />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
