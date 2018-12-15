import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Me } from './components/Me';
import isAuthenticated from './isAuthenticated';

const Logout = () => {
  localStorage.removeItem('token');
  return <Redirect to='/login' />
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render = {
    props => (
      isAuthenticated() ? <Component { ...props } /> : <Redirect to="/login" />
    )
  }>
  </Route>
)

export default [
  <Route exact path='/' component={Home} key={1} />,
  <Route exact path='/login' component={Login} key={2} />,
  <Route exact path='/signup' component={SignUp} key={3} />,
  <PrivateRoute exact path='/me' component={Me} key={4} />,
  <PrivateRoute exact path='/logout' component={Logout} key={5} />
]
