import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getTagIds, getWriters, getTagNames } from "./api/helperFunctions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: theme.spacing(8),
  },
}));

async function getData() {
  return await getWriters.resolve('Success').then(
    function(response) {
      for (var i = 0; i < response.length; i++) {
        var writerInfo = {}
        writerInfo['username'] = response[i].username
        writerInfo['bio'] = response[i].bio
        // console.log('Writer Name: ', response[i].username);
        // console.log('Writer Bio: ', response[i].bio);
        getTagIds(response[i].writerId).then(
          function(response2) {
            for (var j = 0; j < response2.length; j++) {
              getTagNames(response2[j].tag_id).then(
                function(response3) {
                  writerInfo['categories'] = []
                  // console.log('Categories: ')
                  for (var k = 0; k < response3.length; k++) {
                    // console.log(response3[k].tag_name)
                    writerInfo['categories'] = response3[k].tag_name
                  }
                }
              )
            }
          }
        )
      }
      return writerInfo
    }
  )
  // return data
}

async function concat(listOne, listTwo) {
  return listOne.concat(listTwo);
}

const useWriterList = () => {
  const [listOfWriters, setListOfWriters] = useState([]);
  useEffect(async () => {
    try {
      var test2 = await getWriters()

        var test = await getWriters().then(
          function(response) {
            for (var i = 0; i < response.length; i++) {
              var writersTag = {}
              getTagIds(response[i].writerId).then(
                function(response2) {
                  for (var j = 0; j < response2.length; j++) {
                    getTagNames(response2[j].tag_id).then(
                      function(response3) {
                        for (var k = 0; k < response3.length; k++) {
                          var category = response3[k].tag_name
                          if (writersTag['writerid']) {
                            writersTag['writerid'].push(category);
                          }
                          else {
                            writersTag['writerid'] = [category]
                          }
                          console.log('new guy: ', writersTag);
                          setListOfWriters(listOfWriters.concat(writersTag))
                        }
                      }
                    )
                  }
                }
              )
            }
          }
        )
    } catch (e) {console.log('error', e)}
  }, {});
  return listOfWriters;
};

export default function BrowsePage() {
  const classes = useStyles();
  // const [listOfWriters, setListOfWriters] = useState({});
  //
  // const fetchData = async () => {
  //     setListOfWriters(getWriters())
  //   }
  const listOfWriters = useWriterList();
  console.log("test me: ",listOfWriters)

  // {listOfWriters.map(writer => (
  //   <div>
  //     {writer.writerId}
  //   </div>
  //  ))}
  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
      <Navbar />
      </Grid>
      <Grid item xs={12} className={classes.root}>
      {listOfWriters.map(writer => (
        <div>
          <p>Username: {writer.username}</p>
          <br />
          <p>Bio: {writer.bio}</p>
          <br />
        </div>
      ))}

      </Grid>
      <Grid item sm={12}>
      <Footer />
      </Grid>
    </Grid>
  );
}
