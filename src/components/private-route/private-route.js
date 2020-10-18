import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../../utils';

export function PrivateRoute(props) {
  if (isLogged()) {
    return <Route path={props.path} component={props.component} />
  } else {
    return <Redirect to="/login" />
  }
}
