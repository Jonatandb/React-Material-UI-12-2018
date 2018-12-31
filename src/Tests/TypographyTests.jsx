import React from "react";
import Title from "../Title.jsx";
import Typography from "@material-ui/core/Typography";

export default function TypographyTests() {
  return (
    <>
      <Title
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
      <Typography variant="h4" color="secondary">
        Typography variant="h4" color="secondary"
      </Typography>
    </>
  );
}
