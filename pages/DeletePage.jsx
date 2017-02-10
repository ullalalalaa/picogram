import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/Logo';

const DELETE_URL = 'http://localhost:8081/images';

class DeletePage extends React.Component {
  render() {
    return (
      <div className="picogram-page picogram-page-delete">
        <div className="picogram-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="picogram-content">
          
          <p>Your picture has been deleted. </p>
          <Link to="/">Back to your profile</Link>
        </div>
      </div>
    );
  }
}

export default DeletePage;
