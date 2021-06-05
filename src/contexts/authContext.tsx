import { AuthSession } from "@supabase/supabase-js";
import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient";

export type AuthContext = {
    session: AuthSession | null
}

const AuthContext = React.createContext<AuthContext>({ session: null});

export const AuthProvider:React.FC<{}> = ({ children }) => {
    const [session, setSession] = useState<AuthSession | null>(supabase.auth.session())
    useEffect(()=> {
        const cleanup = supabase.auth.onAuthStateChange((_ev, session)=> {
            console.log("auth session changed", session)
            setSession(session)
        })

        return () => {
            console.log("clearing up auth subscription")
            cleanup.data?.unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={{session}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}
