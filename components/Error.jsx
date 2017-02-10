import React from 'react';
import { Link } from 'react-router';

class Error extends React.Component {
  render() {
    return (
      <div className="picogram-error">
        <h2 className="picogram-title">Error</h2>
        <h3 className="picogram-subtitle">Oops! Something went wrong! Let's get you back <Link to="/">home</Link>!</h3>
      </div>
    );
  }
}

export default Error;
