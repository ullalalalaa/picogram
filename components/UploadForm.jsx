import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link } from 'react-router';

const UPLOAD_URL = 'http://localhost:8081/images';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      imageUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(UPLOAD_URL).field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.imageUrl !== '') {
        this.setState({
          imageUrl: response.body.imageUrl
        });
      }
    });
  }

  render() {
    return (
      <form>
        <div className="picogram-upload">
          {this.state.imageUrl !== '' ? null :
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>}
          {this.state.imageUrl !== '' ? null :
          <Link to="/">Cancel</Link>}
        </div>

        <div>
          {this.state.imageUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.imageUrl} />
            <Link to="/">Back to your profile</Link>
          </div>}
        </div>
      </form>
    )
  }
}

export default RegisterForm;
