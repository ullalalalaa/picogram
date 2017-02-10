import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router';
import DeleteButton from '../components/DeleteButton';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:8081/images')
      .then(res => {
        this.setState({ images: res.data });
      });
  }

  removeImageButton (imageid){
    Axios.delete('http://localhost:8081/images/' + imageid)
      .then(this.componentDidMount());
  }

  render() {
    return (
      <div>
        {this.state.images.map(image =>
          <div className="picogram-image-wrapper" key={image.id} onClick={() => this.removeImageButton(image.id)}>
              <img src={"http://localhost:8081/" + image.file} alt={image.description} className="picogram-image" />
              <span className="picogram-image-description"><DeleteButton /></span>
          </div>
        )}
      </div>
    );
  }
}

export default Image;
