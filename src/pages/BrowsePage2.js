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

class BrowsePage2 extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        category:'',
        writers: [],
        isFetching: false
    };
    this.handleChange = this.handleChange.bind(this);

  }

  async handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      category: value
    });
    var  updatedCategory = value;
    console.log("category: " + updatedCategory);

    try {
      this.setState({...this.state, isFetching : true});

      if(updatedCategory != 0)
      {
        let { data, error } = await supabase
          .rpc('ListWritersPerCategory', {
            c_id: parseInt(updatedCategory)
          })

        console.log("data filtered writers" + JSON.stringify(data));
        this.setState({writers: data, isFetching : false});

      }else{
        let { data, error } = await supabase
          .rpc('ListAllWriters')
        console.log(data);
        // this.setState({writers: data, isFetching : false});
        this.setState({writers: data, isFetching : false});
      }
      this.setState({category: value});


    } catch (err) {
      console.error(err);
    }

  }

  async loadwriters(session){

    try {

        this.setState({...this.state, isFetching : true});
        // const { data, error } = await supabase
        // .from('user_category')
        // .select(`
        //   category_id, users (
        //     *
        //   )
        // `).eq('users.is_writer', 1)

        let { data, error } = await supabase
          .rpc('ListAllWriters')
        console.log(data);
        this.setState({writers: data, isFetching : false});

    } catch (err) {
      console.error(err);
    }
  }

   componentDidMount(){
    const session = supabase.auth.session()
    this.loadwriters(session)

 }

  render(){
    return(
      <div>

        <label>
          Choose category:
          <select name="category" value={this.state.category} onChange={this.handleChange}>
            <option value="0">All Categories</option>
            <option value="2">Cheating</option>
            <option value="3">Cheated On</option>
            <option value="4">BDSM</option>
            <option value="1">Romance</option>
          </select>
        </label>

        {this.state.writers.map((writers, index) => (
        <Link to={"/browse2/" + writers.username} key={writers.username}>
          <span>
            {/* <li key={index}>Id:  {writers.users.id}</li> */}
            <li key={index}>username:   {writers.username}</li>
          <li key={index}>BIO: {writers.quote}</li>
          </span>
          {/* <WriterStoryPage story_id={writers.story_id}/> */}
        </Link>
      ))}
      </div>
    );
  }
}


export default BrowsePage2;
