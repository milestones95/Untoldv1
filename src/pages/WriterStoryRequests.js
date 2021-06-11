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
import WriterStoryPage from './WriterStoryPage';

class WriterStoryRequests extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        requests: [],
        isFetching: false
    };
  }

  async loadRequests(session){

    try {

        this.setState({...this.state, isFetching : true});
        let { data, error } = await supabase
            .from('writer_story_request')
            .select('*')
            .eq('writer_id', session?.user.id)
            // console.log("data: " + data[0].user_id);
        this.setState({requests: data, isFetching : false});

    } catch (err) {
      console.error(err);
    }
  }

   componentDidMount(){
    const session = supabase.auth.session()
    this.loadRequests(session)

 }

  render(){
    return(
      <div>
        <p></p>
        {this.state.requests &&
          this.state.requests.map((requests, index) => (
        <Link to={"/wStoryPage/" + requests.story_id} key={requests.id}>
          <span>
            <li key={index}>{requests.user_id}</li>
          </span>
          {/* <WriterStoryPage story_id={requests.story_id}/> */}
        </Link>
      ))}
      </div>
    );
  }
}


export default WriterStoryRequests;
