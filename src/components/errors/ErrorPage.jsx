import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => (
  <>
    <div className="error-container errorpage-container">
      <NavLink className="link error-link" to="/">
        Go back Home
      </NavLink>
    </div>
  </>
);

export default ErrorPage;
