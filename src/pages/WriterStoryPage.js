import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

export default function WriterStoryPage(){
  const { slug } = useParams();
  const [story, storySet] = React.useState([]);

  const getStoryPage = async ()=>{
    let { data, error } = await supabase
        .from('writer_stories')
        .select('story_name, content')
        .eq('story_id', slug)

        storySet(data[0]);
  }

  useEffect(() => {
    getStoryPage()
    }, []);


  return (
    <div>
      <h2>{story.story_name}</h2>
      <h2>{story.content}</h2>
    </div>
);
}
