import React from "react";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class WriterUploadStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: '',
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
                        <p>Story</p>
                        <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    <div>
                      <p> {this.state.newStory}</p>
                    </div>
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
                          <p>Story</p>
                          <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
                          <input type="submit" value="Submit" />
                      <div>
                        <p> {this.state.newStory}</p>
                      </div>
                    </div>
                    );
                  case "bdsm":
                    return (
                      <div>
                          <p>Dom</p>
                          <input name="name" type="text"  onChange={this.handleChange} />
                          <p>Sub</p>
                          <input name="partner_name" type="text" onChange={this.handleChange} />
                          <p>Story</p>
                          <input name="story" type="text" value={this.state.story} onChange={this.handleChange} />
                          <input type="submit" value="Submit" />
                      <div>
                        <p> {this.state.newStory}</p>
                      </div>
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
                            <input type="submit" value="Submit" />
                        <div>
                          <p> {this.state.newStory}</p>
                        </div>
                      </div>
                      );
                  }
                })()}
        </form>
      </div>
      );
    }

}

export default WriterUploadStory;
