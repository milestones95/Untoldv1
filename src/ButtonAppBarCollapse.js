import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    margin: "auto"
  },
  untoldLogo: {
    margin: "auto"
  },
  navBar: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    boxShadow: "none",
    position: "fixed",
    width: "100%",
    height: "10%",
    background: "#ffffff",
  },

});

class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar className={classes.navBar}>
        <Grid container spacing={10}>
          <Grid item sm={5}>
            <MenuIcon color="primary" />
          </Grid>
          <Grid item sm={5} className={classes.buttonCollapse}>
            <MenuIcon onClick={this.handleMenu} color="primary"  />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
            >
              {this.props.children}
            </Menu>
         </Grid>
        </Grid>
      </AppBar>
    );
  }
}
export default withStyles(styles)(ButtonAppBarCollapse);
