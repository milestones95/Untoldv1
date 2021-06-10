import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import Link from '@material-ui/core/Link';
import { supabase } from "../api/supabaseClient";

class WriterProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bio:'',
      categories: []
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Bio Description:
          <input type="text" name="bio" value={this.state.bio} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default WriterProfile;
