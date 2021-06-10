import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import UserStoryRequest from './UserStoryRequest';
// class WriterwriterPage extends React.Component{
//   constructor(props) {
//       super(props);
//       this.state = {
//         stories: [],
//         isFetching: false
//     };
//   }
//
//   componentDidMount(){
//
//   }
//
//   render(){
//     return(
//       <div>
//         writer id: {this.props.writer_id}
//       </div>
//     );
//   }
//
// }
//
// export default WriterwriterPage;

export default function WriterProfileUserView(){
  const { slug } = useParams();
  const [writer, writerSet] = React.useState([]);
  const [showComponent, showComponentSet] = React.useState([]);

  const getProfilePage = async ()=>{
    let { data, error } = await supabase
        .from('users')
        .select('username, quote, id')
        .eq('username', slug)

        writerSet(data[0]);
        console.log("component: "+ showComponent);
  }
  const handleClick = ()=>{
    console.log("clicked");
    showComponentSet(true);
    console.log("component: "+ showComponent);

  }

  useEffect(() => {
    getProfilePage()
    }, []);


  return (
    <div>
      <h2>{writer.username}</h2>
      <h2>{writer.quote}</h2>
      <button onClick={handleClick}>Request Story</button>

      {showComponent ?
           <UserStoryRequest id={writer.id}/> :null
        }
    </div>
);
}
