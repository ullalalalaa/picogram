import React from 'react';
import Logo from '../components/Logo';
import Images from '../components/Images';
import AddButton from '../components/AddButton';

class MainPage extends React.Component {
  render() {
    return (
      <div className="picogram-page picogram-page-main">
        <div className="picogram-header">
          <Logo />
        </div>
        <div className="picogram-content">
          <Images />
        </div>
        <AddButton />
      </div>
    );
  }
}

export default MainPage;
