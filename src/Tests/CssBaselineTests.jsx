import React from "react";
import MyTitle from "../components/MyTitle";

export default function CssBaselineTests() {
  return (
    <>
      <MyTitle
        text="CssBaselineTests"
        link="https://material-ui.com/style/css-baseline/"
        importation='import CssBaseline from "@material-ui/core/CssBaseline";'
        extra=""
      />
    </>
  );
}
