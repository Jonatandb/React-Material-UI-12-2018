import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MyTitle from "./components/MyTitle";
import {
  CssBaselineTests,
  TypographyTests,
  GridTests,
  IconsTests,
  ButtonsTests
} from "./Tests";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <pre>
        <a href="https://jonatandb-react-material-ui-12-2018.netlify.com/">
          Version Netlify
        </a>
        <br />
        <a href="https://oxnr8vmqr6.codesandbox.io/">Version CodeSandbox</a>
      </pre>
      <MyTitle
        text="The definitive guide to React Material"
        link="https://blog.logrocket.com/the-definitive-guide-to-react-material-d730c8a3e8ba"
        extra="Jonatandb tests!"
        type="h3"
      />
      <CssBaselineTests />
      <TypographyTests />
      <GridTests />
      <IconsTests />
      <ButtonsTests />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
