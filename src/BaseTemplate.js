import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const appBarTheme = {
  background: "#181818"
}
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#121212"
    }
  }
});
export default function BaseTemplate() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.root}>
      <AppBar position="static" class={appBarTheme}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Untold
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">SignUp</Button>
          <Button color="inherit">Example Story</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">How It Works</Button>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}
