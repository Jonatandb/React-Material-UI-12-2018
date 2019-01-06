import React from "react";
import SVGIcon from "@material-ui/core/SvgIcon";
import { withStyles } from "@material-ui/core/styles";
import MyTitle from "../components/MyTitle";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import GifIcon from "@material-ui/icons/Gif";
const styles = theme => ({
  iconHover: {
    margin: theme.spacing.unit * 2,
    cursor: "pointer",
    color: "orange",
    "&:hover": {
      color: "gray"
    }
  }
});

function SVGHomeIcon(props) {
  return (
    <SVGIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SVGIcon>
  );
}

function IconsTests(props) {
  const { classes } = props;
  return (
    <>
      <MyTitle
        text="Icons"
        link="https://material-ui.com/style/icons/"
        extra=""
      />

      <Typography variant="body2" align="left">
        SVGIcon basic use:
      </Typography>

      <SVGHomeIcon onClick={() => alert(":-)")} className={classes.iconHover} />

      <Typography variant="caption" align="left">
        import SVGIcon from "@material-ui/core/SvgIcon";
      </Typography>

      <Typography variant="caption" align="left">
        import {`{ withStyles }`} from "@material-ui/core/styles";
      </Typography>

      <br />

      <Typography variant="caption" align="left">
        {`const styles = theme => ({ `}
        <br />
        {`  iconHover: { `}
        <br />
        {`    margin: theme.spacing.unit * 2, `}
        <br />
        {`    cursor: "pointer", `}
        <br />
        {`    color: "orange", `}
        <br />
        {`    "&:hover": { `}
        <br />
        {`      color: "gray" `}
        <br />
        {`    } `}
        <br />
        {`  } `}
        <br />
        {`}); `}
      </Typography>

      <br />

      <Typography variant="caption" align="left">
        {`function MyIcon(props) {`}
        <br />
        {`  const { classes } = props;`}
        <br />
        {`  return (`}
        <br />
        {`    <SVGIcon onClick={() => alert(":)")}  className={classes.iconHover} >`}
        <br />
        {`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />`} <br />
        {`</SVGIcon>`} <br />
        {` );`} <br />
        {` }`} <br />
      </Typography>

      <br />

      <Typography variant="caption" align="left">
        {`export default withStyles(styles)(IconsTests);`}
      </Typography>

      <br />

      <Typography variant="body2" align="left">
        SVG Material icons (
        <a
          href="https://material.io/tools/icons/?style=baseline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Más!
        </a>
        ):
      </Typography>
      <br />

      <Typography variant="caption" align="left">
        {`import DeleteIcon from "@material-ui/icons/Delete";`}
      </Typography>

      <Typography variant="caption" align="left">
        {`import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';`}
      </Typography>

      <Typography variant="caption" align="left">
        {`import ThreeDRotation from '@material-ui/icons/ThreeDRotation';`}
      </Typography>

      <Typography variant="caption" align="left">
        {`import GifIcon from "@material-ui/icons/Gif";`}
      </Typography>

      <br />

      <Typography variant="caption" align="left">
        {`<DeleteIcon onClick={() => alert(":-)")} className={classes.iconHover} />`}
      </Typography>

      <br />
      <Grid container>
        <Grid item xs={3}>
          <DeleteIcon
            onClick={() => alert(":-)")}
            className={classes.iconHover}
          />
        </Grid>
        <Grid item xs={3}>
          <AccessAlarmIcon
            onClick={() => alert(":-)")}
            className={classes.iconHover}
          />
        </Grid>
        <Grid item xs={3}>
          <ThreeDRotation
            onClick={() => alert(":-)")}
            className={classes.iconHover}
          />
        </Grid>{" "}
        <Grid item xs={3}>
          <GifIcon onClick={() => alert(":-)")} className={classes.iconHover} />
        </Grid>
      </Grid>
    </>
  );
}
export default withStyles(styles)(IconsTests);
