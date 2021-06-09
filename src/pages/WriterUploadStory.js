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
     const { error } = await supabase
       .from('writer_stories').insert({
       id: 12,
       story_name: 'this.state.story_name',
       content: 'this.state.story',
       orientation: 'this.state.orientation',
       category_id: 2,
       gender: 'this.state.gender',
       writer_id: /1b61551d-9dae-45de-bcc2-624fd9bbe3de/
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
                 <option value="default">Select a category</option>
                 <option value="cheating">Cheating</option>
                 <option value="cheated_on">Cheated On</option>
                 <option value="bdsm">BDSM</option>
                 <option value="romance">Romance</option>
               </select>
             </label>
             <div>
               <p>Story name</p>
               <input name="story_name" type="text"  onChange={this.handleChange} />
               <p>Story</p>
               <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
               <p>Orientation</p>
               <input name="orientation" type="text"  onChange={this.handleChange} />
               <p>Gender of main character</p>
               <input name="gender" type="text"  onChange={this.handleChange} />
             </div>
             {(()=>{
              switch(this.state.category)
              {
                case "cheating":
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
                  case "cheated_on":
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
                  case "bdsm":
                    return (
                      <div>
                          <p>Dom</p>
                          <input name="name" type="text"  onChange={this.handleChange} />
                          <p>Sub</p>
                          <input name="partner_name" type="text" onChange={this.handleChange} />
                    </div>
                    );
                    case "romance":
                      return (
                        <div>
                            <p>Name</p>
                            <input name="name" type="text"  onChange={this.handleChange} />
                            <p>Partner name</p>
                            <input name="partner_name" type="text" onChange={this.handleChange} />
                            <p>Story</p>
                            <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
                      </div>
                      );
                  }
                })()}
          <input type="submit" value="Submit" />
        </form>
      </div>
      );
    }

}

export default WriterUploadStory;
