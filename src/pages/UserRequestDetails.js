import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

export default function UserRequestDetails(){
  const { slug } = useParams();
  const [request, requestSet] = React.useState([]);

  const getRequestPage = async ()=>{
    let { data, error } = await supabase
        .from('writer_story_request')
        .select('*')
        .eq('id', slug)
        requestSet(data[0]);
  }

  useEffect(() => {
    getRequestPage()
    }, []);


  return (
    <div>
      <h2> Category: {request.category_id}</h2>
      <h2>Name: {request.name}</h2>
      <h2>Partner Name: {request.partner_name}</h2>
      <h2>Lover Name: {request.lover_name}</h2>
      <h2>Orientation: {request.orientation}</h2>
      <h2>Gender: {request.gender}</h2>
      {(()=>{
       switch(request.is_completed)
       {
         case false:
           return (
             <div>
               <h2>Status: In Progress</h2>
           </div>
           );
           case true:
             return (
               <div>
                 <h2>Status: Complete</h2>
             </div>
             );
           }
         })()}
    </div>
);
}
