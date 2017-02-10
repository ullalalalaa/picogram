import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/Logo';
import ErrorComp from '../components/Error';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="picogram-page picogram-page-error">
        <div className="picogram-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="picogram-content">
          <ErrorComp />
        </div>
      </div>
    );
  }
}

export default ErrorPage;
