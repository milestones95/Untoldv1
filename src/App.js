import React from "react";
import StripeContainer from "./Stripe/StripeContainer";
import { supabase } from "./api/supabaseClient";
import { useAuth } from "./contexts/authContext";
import { Redirect } from "react-router";
// import { useProfile } from "../hooks/useProfile";

const App = () => {

  const { session } = useAuth();
  // const [profile, profileError, profileLoading] = useProfile(session?.user.id);

 //  if (!session) {
 //    console.log("not session");
 //     return <Redirect to={"/login"} />;
 //   }
 //
 //   if(!session) {
 //       return <Redirect to={"/signup"}/>
 //   // if (profileLoading) {
 //   //   return <PageLoading />;
 //   // }
 // }


  return (
    <div className="App">
      <StripeContainer />
    </div>
  );
};

export default App;
