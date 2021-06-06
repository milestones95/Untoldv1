import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class WriterUploadStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      story: '',
      partner_name: '',
      lover_name: '',
      name: '',
      newStory: ''
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

  handleSubmit(event) {
    const originalStory = this.state.story;
    var resWithPartnerTemplate = originalStory.replaceAll(this.state.partner_name, "{Partner_Name}");
    var resWithNameAndPartnerTemplate = resWithPartnerTemplate.replaceAll(this.state.name, "{Name}");
    var resWithLoverNameTemplate = resWithNameAndPartnerTemplate.replaceAll(this.state.lover_name, "{Lover_Name}");
    
    this.setState({
      newStory: resWithLoverNameTemplate
    });
    event.preventDefault();

  }

  render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input name="name" type="text"  onChange={this.handleChange} />
          <p>Partner's name</p>
          <input name="partner_name" type="text" onChange={this.handleChange} />
          <p>Lover's name</p>
          <input name="lover_name" type="text" onChange={this.handleChange} />
          <p>Story</p>
          <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <div>
          <p> {this.state.newStory}</p>
        </div>
      </div>
      );
    }
}

export default WriterUploadStory;
