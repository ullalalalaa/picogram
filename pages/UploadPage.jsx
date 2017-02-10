import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/Logo';
import UploadForm from '../components/UploadForm';

class UploadPage extends React.Component {
  render() {
    return (
      <div className="picogram-page picogram-page-upload">
        <div className="picogram-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="picogram-content">
          <UploadForm />
        </div>
      </div>
    );
  }
}

export default UploadPage;
