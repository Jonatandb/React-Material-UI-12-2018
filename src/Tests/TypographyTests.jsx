import React from "react";
import MyTitle from "../components/MyTitle";
import Typography from "@material-ui/core/Typography";

export default function TypographyTests() {
  return (
    <>
      <MyTitle
        text="Typography"
        link="https://material-ui.com/style/typography/"
        importation={'import Typography from "@material-ui/core/Typography";'}
        extra="- 'gutterBottom' hace que un Typography tenga un margen inferior, como el h6 siguiente:"
      />
      <Typography variant="h6" color="inherit">
        Typography variant="h6" color="inherit"
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        Typography variant="h5" color="primary"
      </Typography>
      <Typography variant="h4" color="secondary" gutterBottom>
        Typography variant="h4" color="secondary"
      </Typography>
      <br />
      <Typography variant="body2" align="left">
        Variants:
      </Typography>
      <ul>
        <li>
          <Typography variant="h1">h1</Typography>
        </li>
        <li>
          <Typography variant="h2">h2</Typography>
        </li>
        <li>
          <Typography variant="h3">h3</Typography>
        </li>
        <li>
          <Typography variant="h4">h4</Typography>
        </li>
        <li>
          <Typography variant="h5">h5</Typography>
        </li>
        <li>
          <Typography variant="h6">h6</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">subtitle1</Typography>
        </li>
        <li>
          <Typography variant="subtitle2">subtitle2</Typography>
        </li>
        <li>
          <Typography variant="body1">body1</Typography>
        </li>
        <li>
          <Typography variant="body2">body2</Typography>
        </li>
        <li>
          <Typography variant="button">button</Typography>
        </li>
        <li>
          <Typography variant="caption">caption</Typography>
        </li>
        <li>
          <Typography variant="overline">overline</Typography>
        </li>
      </ul>
    </>
  );
}
