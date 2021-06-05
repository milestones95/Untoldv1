import React, {useRef, useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { supabase } from "./api/supabaseClient";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";



const useStyles = makeStyles(theme => ({
  root: {
    height: "80%",
    marginTop: theme.spacing(8),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1)
  },
  footerPadding: {
    marginTop: theme.spacing(2),
    bottom: "0",
    position: "fixed",
    width: "100%",
  },
  submit: {
    // margin: theme.spacing(3, 0, 2)
  }
}));

const LoginPage = () => {
      const [helperText, setHelperText] = useState({ error: null, text: null });
      const emailRef = useRef();
      const passwordRef = useRef();
      const classes = useStyles();
      const history = useHistory() // imported from react-router!

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
          history.push("/billing");
          //console.log("billing");
      };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Navbar />
      </Grid>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in to your account
          </Typography>
          <Grid container spacing={2}>
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
              label="Remember me"
            />
          </Grid>
          </Grid>

          <Button
           type="submit"
           onClick={() =>
               handleLogin("LOGIN").catch(console.error)
           }
           className={classes.submit}
           fullWidth
           variant="contained"
           color="primary"
          >
           Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
        </div>
      </Grid>
    </Grid>
    <Grid item xs={12} >
    <Footer />
    </Grid>
  </Grid>
  );
};

export default LoginPage;
