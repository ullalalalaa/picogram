import React from 'react';

class DeleteButton extends React.Component {
  render() {
    return (
      <div className="picogram-delete">
        <i className="fa fa-trash-o fa-2x fa-fw" aria-hidden="true"></i>
      </div>
    );
  }
}

export default DeleteButton;
