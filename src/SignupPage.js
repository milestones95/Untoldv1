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

    const handleLogin = async (type) => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const { user, error } =
            type === "LOGIN"
                ? await supabase.auth.signIn({ email, password })
                : await supabase.auth.signUp({ email, password });

        if (error) {
            setHelperText({ error: true, text: error.message });
        } else if (!user && !error) {
            setHelperText({
                error: false,
                text: "An email has been sent to you for verification!",
            });
        }
    };

    const handleOAuthLogin = async (provider) => {
        // You need to enable the third party auth you want in Authentication > Settings
        // Read more on: https://supabase.io/docs/guides/auth#third-party-logins
        let { error } = await supabase.auth.signIn({ provider });
        if (error) console.log("Error: ", error.message);
    };

    const forgotPassword = async (e) => {
        // Read more on https://supabase.io/docs/reference/javascript/reset-password-email#notes
        e.preventDefault();
        const email = prompt("Please enter your email:");

        if (email === null || email === "") {
            setHelperText({ error: true, text: "You must enter your email." });
        } else {
            let { error } = await supabase.auth.api.resetPasswordForEmail(
                email
            );
            if (error) {
                console.error("Error: ", error.message);
            } else {
                setHelperText({
                    error: false,
                    text: "Password recovery email has been sent.",
                });
            }
        }
    };

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
                          onClick={() =>
                              handleLogin("REGISTER").catch(console.error)
                          }
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
