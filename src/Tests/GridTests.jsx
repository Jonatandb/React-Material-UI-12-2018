import React from "react";
import MyTitle from "../components/MyTitle";
import Typography from "@material-ui/core/Typography";
export default function GridTests() {
  return (
    <>
      <MyTitle
        text="Grid"
        link="https://material-ui.com/layout/grid/"
        extra=""
      />
      <Typography variant="body2" align="left">
        The grid system features the following:
      </Typography>
      <ul>
        <li>
          <Typography variant="caption">It uses Flexbox</Typography>
        </li>
        <li>
          <Typography variant="caption">
            There are two types of layout: containers and items
          </Typography>
        </li>
        <li>
          <Typography variant="caption">
            Item widths are set in percentages, so they’re always fluid and
            sized relative to their parent element
          </Typography>
        </li>
        <li>
          <Typography variant="caption">
            Items have padding to create the spacing between individual items.
          </Typography>
        </li>
        <li>
          <Typography variant="caption">
            There are five grid breakpoints: xs, sm, md, lg, and xl
          </Typography>
        </li>
      </ul>
    </>
  );
}
