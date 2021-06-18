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
import blue from '@material-ui/core/colors/blue';
import HorizontalLinearStepper from './Stepper'
import Home from './pages/Home'
import UserStoryLibrary from './pages/UserStoryLibrary'
import WriterStoryLibrary from './pages/WriterStoryLibrary'
import WriterStoryPage from './pages/WriterStoryPage'
import UserStoryPage from './pages/UserStoryPage'
import WriterProfile from './pages/WriterProfile'
import UserStoryRequest from './pages/UserStoryRequest'
import WriterStoryRequests from './pages/WriterStoryRequests'
import UserRequestStatusListView from './pages/UserRequestStatusListView'
import UserRequestDetails from './pages/UserRequestDetails'
import WriterUploadStory from './pages/WriterUploadStory'
import WriterProfileUserView from './pages/WriterProfileUserView'
import Reader from './pages/Reader'
import AuthProvider from './Auth/Auth'
import {PrivateRoute, BlockAuthFlows} from './PrivateRoute'
import BrowseWriters from './pages/BrowseWriters'
import StripeContainer from './Stripe/StripeContainer'
import CustomerPurchaseStripeContainer from './Stripe/CustomerPurchaseStripeContainer'
import TermsOfService from './Stripe/TermsOfService'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <AuthProvider>
          <BlockAuthFlows exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <BlockAuthFlows exact path="/login" component={LoginPage} />
          <Route exact path="/examplestory" component={ExampleStory} />
          <PrivateRoute exact path="/WriterUploadStory" component={WriterUploadStory} />
          <PrivateRoute exact path="/writerLibrary" component={WriterStoryLibrary} />
          <PrivateRoute exact path="/wRequests" component={WriterStoryRequests} />
          <PrivateRoute exact path="/wStoryPage/:slug" component={WriterStoryPage} />
          <PrivateRoute exact path="/wProfile" component={WriterProfile} />
          <Route exact path="/requestStory" component={UserStoryRequest} />
          <Route exact path="/requestStatusListView" component={UserRequestStatusListView} />
          <Route exact path="/requestDetails/:slug" component={UserRequestDetails} />
          <PrivateRoute exact path="/userlibrary" component={UserStoryLibrary} />
          <PrivateRoute exact path="/storypage/:slug" component={UserStoryPage} />
          <Route exact path="/onboarding" component={HorizontalLinearStepper} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/browseWriters" component={BrowseWriters} />
          <Route exact path="/browseWriters/:slug" component={WriterProfileUserView} />
          <Route exact path="/wCreateAccount" component={StripeContainer} />
          // {/* <Route exact path="/purchase" component={CheckoutPage} /> */}
          <Route exact path="/stripe/tos" component={TermsOfService} />
          <Route exact path="/purchase" component={CustomerPurchaseStripeContainer} />
          <Route exact path="/reader" component={Reader} />
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
