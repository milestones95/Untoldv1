import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from './Auth/Auth'

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, redirect to the login page
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export function BlockAuthFlows({ component: Component, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        // Does not Renders the page if the `user` is present (user is authenticated)
        // Otherwise, redirect to the profile page
        return user ? <Redirect to="/profile" /> : <Component {...props} />
      }}
    ></Route>
  )
}
