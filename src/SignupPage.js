import React, {useRef, useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { supabase } from "./api/supabaseClient";
import { useForm } from "react-hook-form";
import { useAuth } from './Auth'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.grey,
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    marginLeft: theme.spacing(6),
  },
  textUnderAvatar: {
    alignItems: "center",
    marginLeft: theme.spacing(6),
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
}));

const SignUp = () => {
    const [helperText, setHelperText] = useState({ error: null, text: null });
    const emailRef = useRef();
    const passwordRef = useRef();
    const classes = useStyles();
    const { signUp } = useAuth()
    const history = useHistory()

    async function handleSignUp(e) {
      e.preventDefault()

      // Get email and password input values
      const email = emailRef.current.value
      const password = passwordRef.current.value

      // Calls `signUp` function from the context
      const { error } = await signUp({ email, password })

      if (error) {
        alert('error signing in')
      } else {
        // Redirect user to Dashboard
        alert('Your account was created! Check your email')
        history.push('/login')
      }
    }

    return (
          <Grid container spacing={10}>
            <Grid item xs={12}>
            <Navbar />
            </Grid>
              <Container component="main">
                <CssBaseline />
                <div className={classes.paper}>
                         <Avatar className={classes.avatar}>
                           <LockOutlinedIcon />
                         </Avatar>
                         <Typography component="h1" variant="h5" className={classes.textUnderAvatar}>
                           Create an account
                         </Typography>
                         <Grid container spacing={2}>
                         <Grid item xs={12} lg={12}>
                            <TextField
                             autoComplete="fname"
                             name="firstName"
                             variant="outlined"
                             required
                             fullWidth
                             id="firstName"
                             label="First Name"
                             autoFocus
                           />
                         </Grid>
                         <Grid item xs={12} lg={12}>
                           <TextField
                             variant="outlined"
                             required
                             fullWidth
                             id="email"
                             label="Email Address"
                             name={"email"}
                             type={"email"}
                             autoComplete="email"
                             inputRef={emailRef}
                           />
                         </Grid>
                         <Grid item xs={12} lg={12}>
                           <TextField
                             variant="outlined"
                             required
                             fullWidth
                             name={"password"}
                             label="Password"
                             type={"password"}
                             id="password"
                             autoComplete="current-password"
                             inputRef={passwordRef}

                           />
                         </Grid>
                         <Grid item xs={12} lg={12}>
                           <FormControlLabel
                             control={<Checkbox value="allowExtraEmails" color="primary" />}
                             label="I want to get updates via email."
                           />
                         </Grid>
                       </Grid>

                      <Button
                          type="submit"
                          onClick={handleSignUp}
                          className={classes.submit}
                          fullWidth
                          variant="contained"
                          color="primary"
                      >
                          Sign Up
                      </Button>
                    <Grid container justify="flex-end">
                     <Grid item>
                      <Link href="/login" variant="body2">
                         Already have an account? Sign in
                       </Link>
                     </Grid>
                   </Grid>
              </div>
             </Container>
            <Grid item xs={12}>
           <Footer />
          </Grid>
      </Grid>
    );


};

export default SignUp;
