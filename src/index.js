import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ExampleStory from "./pages/ExampleStory";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseTemplate from "./templates/BaseTemplate";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Example from './TailWindTest'
import HorizontalLinearStepper from './Stepper'
import Home from './pages/Home'
import UserStoryLibrary from './pages/UserStoryLibrary'
import WriterStoryLibrary from './pages/WriterStoryLibrary'
import WriterStoryPage from './pages/WriterStoryPage'
import UserStoryPage from './pages/UserStoryPage'
import UserStoryRequest from './pages/UserStoryRequest'
import UserRequestStatusListView from './pages/UserRequestStatusListView'
import UserRequestDetails from './pages/UserRequestDetails'
import WriterUploadStory from './pages/WriterUploadStory'
import AuthProvider from './Auth/Auth'
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
          <Route exact path="/writerLibrary" component={WriterStoryLibrary} />
          <Route exact path="/wStoryPage/:slug" component={WriterStoryPage} />
          <Route exact path="/requestStory" component={UserStoryRequest} />
          <Route exact path="/requestStatusListView" component={UserRequestStatusListView} />
          <Route exact path="/requestDetails/:slug" component={UserRequestDetails} />
          <Route exact path="/userlibrary" component={UserStoryLibrary} />
          <Route exact path="/storypage/:slug" component={UserStoryPage} />
          <Route exact path="/onboarding" component={HorizontalLinearStepper} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/form" component={Form} /> */}
          <Route exact path="/" component={Home} />
        </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
