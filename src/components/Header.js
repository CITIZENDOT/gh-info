import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10
  }
}));

function Header({ toggle }) {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <IconButton><GitHubIcon htmlColor="white" /></IconButton>
          </Grid>
          <Grid item style={{ display: "flex" }}>
            <Typography variant="h5" style={{ alignSelf: "center" }}>gh-info</Typography>
          </Grid>
          <Grid item alignItems="center">
            <Switch onChange={toggle} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;