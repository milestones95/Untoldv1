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

class WriterStoryLibrary extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        stories: [],
        isFetching: false
    };
  }

  async loadStories(session){

    try {

        this.setState({...this.state, isFetching : true});
        let { data, error } = await supabase
            .from('writer_stories')
            .select('*')
            .eq('writer_id', session.user.id)

        this.setState({stories: data, isFetching : false});

    } catch (err) {
      console.error(err);
    }
  }

   componentDidMount(){
    const session = supabase.auth.session()
    this.loadStories(session)

 }

  render(){
    return(
      <div>
        {this.state.stories &&
          this.state.stories.map((stories, index) => (
        <Link to={"/wStoryPage/" + stories.story_id} key={stories.id}>
          <span>
            <li key={index}>{stories.story_name}</li>
          </span>
        </Link>
      ))}
      </div>
    );
  }
}


export default WriterStoryLibrary;
