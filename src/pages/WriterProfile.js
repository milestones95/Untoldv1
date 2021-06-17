import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import {Link } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import { useHistory } from "react-router";

class WriterProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      categories: []
    };


    this.handleChange = this.handleChange.bind(this);
    this.openPayments = this.openPayments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  openPayments(event) {
    console.log("payments");

  }

  handleSubmit = async(event) => {
    event.preventDefault();
    try {
        const session = supabase.auth.session()
        const { error } = await supabase.from('users').update({
         quote: this.state.bio})
         .eq('id', session?.user.id);
   } catch (err) {
     console.error(err);
   }

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Bio Description:
          <input type="text" name="bio" value={this.state.bio} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Save" />
      </form>
      <Link to="/wCreateAccount">
        <button>Payments</button>
      </Link>
    </div>
    );
  }
}

export default WriterProfile;
