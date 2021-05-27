import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContactCard () {
  const classes = useStyles();

  return (
      <Grid container spacing={3} direction="columns">
        <Grid item xs={12} sm={4}>
          <div align="left">
            <Typography variant="h6" >
              Everything you need
            </Typography>
            <Typography variant="h6" >
              All-in-one platform
            </Typography>
            <Typography variant="h6" >
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <List component="nav" className={classes.root}>
             <ListItem button>
               <ListItemIcon>
                 <CheckIcon />
               </ListItemIcon>
               <ListItemText primary="Chelsea Otakan" />
             </ListItem>
             <ListItem button>
               <ListItemText inset primary="Eric Hoffman" />
             </ListItem>
           </List>
        </Grid>
        <Grid item xs={12} sm={4}>
          <List component="nav" className={classes.root}>
             <ListItem button>
               <ListItemIcon>
                 <CheckIcon />
               </ListItemIcon>
               <ListItemText primary="Chelsea Otakan" />
             </ListItem>
             <ListItem button>
               <ListItemText inset primary="Eric Hoffman" />
             </ListItem>
           </List>
        </Grid>
      </Grid>
  )
}
