import React from 'react';
import { Link } from 'react-router';

class AddButton extends React.Component {
  render() {
    return (
      <div className="picogram-add">
        <Link to="/upload" className="picogram-add-link"><i className="fa fa-plus-circle fa-5x fa-fw" aria-hidden="true"></i></Link>
      </div>
    );
  }
}

export default AddButton;
