import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/Logo';

class ImagePage extends React.Component {
  render() {
    return (
      <div className="picogram-page picogram-page-image">
        <div className="picogram-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="picogram-content">
        </div>
      </div>
    );
  }
}

export default ImagePage;
