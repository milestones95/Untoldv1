import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from "./SignupPage";
import LoginPage from "./LoginPage";
import ExampleStory from "./ExampleStory";
import Profile from "./Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
<<<<<<< HEAD
import Example from './TailWindTest'
import HorizontalLinearStepper from './Stepper'
import Home from './Home'
=======
>>>>>>> cbdb16dc4c32708cb6cd7ef016deb8e685e1dc13

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/examplestory" component={ExampleStory} />
          <Route exact path="/base" component={BaseTemplate} />
          <Route exact path="/example" component={Example} />
          <Route exact path="/onboarding" component={HorizontalLinearStepper} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
