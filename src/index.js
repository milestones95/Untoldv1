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
import Example from './TailWindTest'
import HorizontalLinearStepper from './Stepper'
import Home from './Home'
import WriterForm from './Forms/WriterForm'
import WriterUploadStory from './WriterUploadStory'
// import Form from './WriterUploadStory1'
import AuthProvider from './Auth'
import PrivateRoute from './PrivateRoute'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <AuthProvider>
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/examplestory" component={ExampleStory} />
          <Route exact path="/WriterUploadStory" component={WriterUploadStory} />
          <Route exact path="/onboarding" component={HorizontalLinearStepper} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/uploadForm" component={WriterForm} />
          {/* <Route exact path="/form" component={Form} /> */}
          <Route exact path="/" component={App} />
        </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
