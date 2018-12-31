import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const H4 = ({ text, link, extra }) => {
  return (
    <React.Fragment>
      <hr />
      <Typography variant="h4" seconcolor="secondary" gutterBottom>
        <a href={link ? link : "#"} target={link ? "_blank" : ""}>
          {text ? text : "Tema sin título..."}
        </a>
      </Typography>
      {extra ? <pre>{extra}</pre> : ""}
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <H4
        text="The definitive guide to React Material"
        link="https://blog.logrocket.com/the-definitive-guide-to-react-material-d730c8a3e8ba"
        extra="Jonatandb tests!"
      />
      <H4
        text="Typography"
        link="https://material-ui.com/style/typography/"
        extra="gutterBottom hace que un Typography tenga un margen inferior, como esta línea."
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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
