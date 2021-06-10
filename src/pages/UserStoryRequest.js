import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { supabase } from "../api/supabaseClient";
import { useAuth } from '../Auth/Auth';
import Navbar from "../templates/Navbar";
import { Redirect } from "react-router-dom";
import Link from '@material-ui/core/Link';

class UserStoryRequest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      orientation: '',
      gender: '',
      partner_name: '',
      lover_name: '',
      additional_details: '',
      name: '',
      newStory: '',
      is_completed: false,
      isAuthorized: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // const target = event.target;
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

   handleSubmit = async(event) =>{
    event.preventDefault();

    try {

      const session = supabase.auth.session()
     //   setSaved(false)
     // setIsSubmitting(true);
     const { error } = await supabase
       .from('writer_story_request').insert({
       user_id: session?.user.id,
       name: this.state.name,
       partner_name: this.state.partner_name,
       lover_name: this.state.lover_name,
       orientation: this.state.orientation,
       category_id: this.state.category,
       gender: this.state.gender,
       additional_details: this.state.additional_details,
       is_completed: this.state.is_completed
          });
   } catch (err) {
     console.error(err);
   }

  }

  // async componentDidMount()
  // {
  //   const session = supabase.auth.session()
  //
  //   let { data, error } = await supabase
  //       .from('users')
  //       .select('role_id')
  //       .eq('user_id', session.user.id)
  //   var role_id = data;
  //   if(role_id ==2)
  //   {
  //     this.setState({
  //       isAuthorized: true
  //     });
  //   }
  // }

  render() {
    //
    // if(!this.state.isAuthorized){
    //   <Redirect to="/login" />
    // }
     return (
       <div>
         <Link href='/home'>Home</Link>
           <form onSubmit={this.handleSubmit}>
             <label>
               Choose category:
               <select name="category" value={this.state.category} onChange={this.handleChange}>
                 <option value="0">Select a category</option>
                 <option value="2">Cheating</option>
                 <option value="3">Cheated On</option>
                 <option value="4">BDSM</option>
                 <option value="1">Romance</option>
               </select>
             </label>
             {(()=>{
              switch(this.state.category)
              {
                case "2":
                  return (
                    <div>
                        <p>Name</p>
                        <input name="name" type="text"  onChange={this.handleChange} />
                        <p>Partner's name</p>
                        <input name="partner_name" type="text" onChange={this.handleChange} />
                        <p>Lover's name</p>
                        <input name="lover_name" type="text" onChange={this.handleChange} />
                  </div>
                  );
                  case "3":
                    return (
                      <div>
                          <p>Name</p>
                          <input name="name" type="text"  onChange={this.handleChange} />
                          <p>Partner's name</p>
                          <input name="partner_name" type="text" onChange={this.handleChange} />
                          <p>Lover's name</p>
                          <input name="lover_name" type="text" onChange={this.handleChange} />
                    </div>
                    );
                  case "4":
                    return (
                      <div>
                          <p>Dom</p>
                          <input name="name" type="text"  onChange={this.handleChange} />
                          <p>Sub</p>
                          <input name="partner_name" type="text" onChange={this.handleChange} />
                    </div>
                    );
                    case "1":
                      return (
                        <div>
                            <p>Name</p>
                            <input name="name" type="text"  onChange={this.handleChange} />
                            <p>Partner name</p>
                            <input name="partner_name" type="text" onChange={this.handleChange} />
                      </div>
                      );
                  }
                })()}
                <div>
                  <label>
                    Sexual orientation of main character
                    <select name="orientation" value={this.state.orientation} onChange={this.handleChange}>
                      <option value="0">Select gender</option>
                      <option value="1">Heterosexual</option>
                      <option value="2">Homosexual</option>
                      <option value="3">Bisexual</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    Gender of main character
                    <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                      <option value="0">Select gender</option>
                      <option value="1">M</option>
                      <option value="2">F</option>
                    </select>
                  </label>
                  <p>Additional details</p>
                  <input name="additional_details" type="text"  onChange={this.handleChange} />
                </div>
          <input type="submit" value="Submit" />
        </form>
      </div>

      );
    }

}

export default UserStoryRequest;
