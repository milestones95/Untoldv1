import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { getAStory } from "../api/helperFunctions";
import parse from 'html-react-parser';

const useStyles = makeStyles(theme => ({
  sampleStory: {
    marginTop: theme.spacing(10),
    color: "primary",
    textAlign: "center"
  },
  body: {
    textAlign: "left",
    marginRight: theme.spacing(60),
    marginLeft: theme.spacing(60),
    marginTop: theme.spacing(1),
  }
}));

const FindStory = () => {
  const [story, setStory] = useState('');
  useEffect(async () => {
    try {
        var getStory = await getAStory(1).then(
          function(response) {
                setStory(response[0])
              }
            )
    } catch (e) {console.log('error', e)}
  }, {});
  return story;
};

export default function Reader() {
  const classes = useStyles();
  const story = FindStory();
  var storyContent = String(story.content)
  console.log(storyContent)
  storyContent = storyContent.replace(/(?:\r\n|\r|\n)/g, '<br>')
  storyContent = parse(storyContent)

  console.log(story)
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" color="primary" className={classes.sampleStory}>
            Sample Story
          </Typography>
         </Grid>
        <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
          <Typography variant="h3">
            {story.story_name}
          </Typography>
         </Grid>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.body}>
              {storyContent}
            </Typography>
        </Grid>
      <Grid item xs={12}>
      <Footer />
      </Grid>
    </Grid>
  );
}
