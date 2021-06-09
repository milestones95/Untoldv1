import React, { Component, useContext, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import { supabase } from "../api/supabaseClient";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../Auth/Auth'
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'

class UserRequestStatusListView extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        requests: [],
        isFetching: false
    };
  }

  async loadrequests(session){

    try {

        this.setState({...this.state, isFetching : true});
        let { data, error } = await supabase
            .from('writer_story_request')
            .select('*')
            .eq('user_id', session.user.id)

        this.setState({requests: data, isFetching : false});

    } catch (err) {
      console.error(err);
    }
  }

   componentDidMount(){
    const session = supabase.auth.session()
    this.loadrequests(session)

 }

  render(){
    return(
      <div>
        {this.state.requests &&
          this.state.requests.map((requests, index) => (
        <Link to={"/requestDetails/" + requests.id} key={requests.id}>
          <span>
            <li key={index}>{requests.category_id}</li>
          </span>
        </Link>
      ))}
      </div>
    );
  }
}


export default UserRequestStatusListView;
