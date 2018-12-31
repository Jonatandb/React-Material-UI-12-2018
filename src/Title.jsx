import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title({ text, link, type, importation, extra }) {
  return (
    <React.Fragment>
      <hr />
      <Typography
        variant={type ? type : "h4"}
        seconcolor="secondary"
        gutterBottom
      >
        <a href={link ? link : "#"} target={link ? "_blank" : ""}>
          {text ? text : "Tema sin título..."}
        </a>
      </Typography>
      {importation ? <pre>{importation}</pre> : ""}
      {extra ? (
        <Typography
          variant={type ? type : "h6"}
          seconcolor="secondary"
          style={{ backgroundColor: "lightgray" }}
        >
          {extra}
        </Typography>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
