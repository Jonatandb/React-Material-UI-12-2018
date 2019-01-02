import React from "react";
import MyTitle from "../components/MyTitle";
import Typography from "@material-ui/core/Typography";

export default function CssBaselineTests() {
  return (
    <>
      <MyTitle
        text="CssBaselineTests"
        link="https://material-ui.com/style/css-baseline/"
        importation='import CssBaseline from "@material-ui/core/CssBaseline";'
        extra={`- Requiere: <link
        rel=\"stylesheet\"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />`}
      />
      <Typography variant="body2" align="left">
        Hace lo siguiente:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Se elimina el margen en todos los navegadores.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Se aplica el color de fondo predeterminado de Material Design.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            El suavizado de fuentes está habilitado para una mejor visualización
            de la fuente Roboto
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            No se declara ningún tamaño de fuente base en {"<html>"}, pero se
            supone 16px (valor predeterminado del navegador)
          </Typography>
        </li>
      </ul>
    </>
  );
}
