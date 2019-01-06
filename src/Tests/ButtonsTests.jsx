import React from "react";
import MyTitle from "../components/MyTitle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";

export default function() {
  return (
    <>
      <MyTitle
        text="Buttons"
        link="https://material-ui.com/demos/buttons/"
        importation={`import Button from '@material-ui/core/Button';`}
        extra={``}
      />
      <Typography variant="body2" align="left">
        Botones planos:
      </Typography>
      <Typography variant="caption" align="left">
        {`<Button color="primary">Jonatandb</Button>`}
      </Typography>
      <Button color="primary">Jonatandb</Button>

      <Typography variant="body2" align="left">
        Botones delineados:
      </Typography>
      <Typography variant="caption" align="left">
        {`<Button variant="outlined" color="primary">Jonatandb</Button>`}
      </Typography>
      <Button variant="outlined" color="primary">
        Jonatandb
      </Button>

      <Typography variant="body2" align="left">
        Botones levantados:
      </Typography>
      <Typography variant="caption" align="left">
        {`<Button variant="raised" color="primary">Jonatandb</Button>`}
      </Typography>
      <Button variant="raised" color="primary">
        Jonatandb
      </Button>

      <Typography variant="body2" align="left">
        Botones con iconos y etiqueta:
      </Typography>
      <Typography variant="caption" align="left">
        {`      <Button variant="contained" color="secondary">
        Delete
        <DeleteIcon />      </Button>`}
      </Typography>
      <Button variant="contained" color="secondary">
        Delete
        <DeleteIcon />
      </Button>
      <Typography variant="caption" align="left">
        {`      <Button variant="contained" color="secondary">
        Send
        <SendIcon />
      </Button>`}
      </Typography>
      <Button variant="contained" color="secondary">
        Send
        <SendIcon />
      </Button>

      <Typography variant="body2" align="left">
        Botón de acción flotante:
      </Typography>
      <Typography variant="caption" align="left">
        {`<Button variant="fab" color="primary" aria-label="add">
            <AddIcon />
          </Button>`}
      </Typography>
      <Button variant="fab" color="primary" aria-label="add">
        <AddIcon />
      </Button>
      <Typography variant="caption" align="left">
        import Fab from "@material-ui/core/Fab";
      </Typography>
      <Typography variant="caption" align="left">
        import NavigationIcon from "@material-ui/icons/Navigation";
      </Typography>
      <Typography variant="caption" align="left">
        {`<Fab variant="extended" aria-label="del">
            <NavigationIcon />
              Extendido
          </Fab>`}
      </Typography>
      <Fab variant="extended" aria-label="del" size="small">
        <NavigationIcon />
        size="small"
      </Fab>
      <Fab variant="extended" aria-label="del" size="medium">
        <NavigationIcon />
        Extendido
      </Fab>
      <Fab variant="extended" aria-label="del" size="large" color="secondary">
        <NavigationIcon />
        color="secondary"
      </Fab>
    </>
  );
}
