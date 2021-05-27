import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../context/custom_hooks';

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/' />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
