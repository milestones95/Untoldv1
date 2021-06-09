import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { supabase } from "../api/supabaseClient";
import { useAuth } from '../Auth/Auth';

class WriterUploadStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      orientation: '',
      gender: '',
      story_name: '',
      story: '',
      partner_name: '',
      lover_name: '',
      name: '',
      newStory: ''
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
    const originalStory = this.state.story;
    var resWithPartnerTemplate = originalStory.replaceAll(this.state.partner_name, "{Partner_Name}");
    var resWithNameAndPartnerTemplate = resWithPartnerTemplate.replaceAll(this.state.name, "{Name}");
    var resWithLoverNameTemplate = resWithNameAndPartnerTemplate.replaceAll(this.state.lover_name, "{Lover_Name}");

    this.setState({
      newStory: resWithLoverNameTemplate
    });
    event.preventDefault();

    try {
      const session = supabase.auth.session()

     const { error } = await supabase
       .from('writer_stories').insert({
       story_name: this.state.story_name,
       content: this.state.story,
       orientation: this.state.orientation,
       category_id: this.state.category,
       gender: this.state.gender,
       writer_id: session?.user.id
     });

     this.setState({
       category: '',
       orientation: '',
       gender: '',
       story_name: '',
       story: '',
       partner_name: '',
       lover_name: '',
       name: '',
       newStory: ''
     })
   } catch (err) {
     console.error(err);
   }

  }

  render() {
     return (
       <div>
         <h1>Writer Upload Story Page</h1>
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
             <div>
               <p>Story name</p>
               <input name="story_name" type="text" value={this.state.story_name} onChange={this.handleChange} />
               <p>Story</p>
               <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
             </div>
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
                    Gender of main character
                    <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                      <option value="0">Select gender</option>
                      <option value="1">M</option>
                      <option value="2">F</option>
                    </select>
                  </label>
                </div>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
      );
    }

}

export default WriterUploadStory;
