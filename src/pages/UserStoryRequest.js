import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { supabase } from "../api/supabaseClient";
import { useAuth } from '../Auth/Auth';

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
      is_completed: false
    };
    // const { session } = useAuth();

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

  render() {
     return (
       <div>
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
                  <p>Orientation</p>
                  <input name="orientation" type="text"  onChange={this.handleChange} />
                  <p>Gender of main character</p>
                  <input name="gender" type="text"  onChange={this.handleChange} />
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
