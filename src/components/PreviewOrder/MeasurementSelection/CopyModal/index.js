import React from 'react';
import firebase from 'firebase';
import { notification } from 'antd';
import { render } from '@testing-library/react';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class CopyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.userId,
      isUploading: false,
      progress: 0,
      imageURL: '',
      uploaded: false,
    };
  }

  componentDidMount() {
    console.log(this.state.uid);
  }

  handleUploadSuccess = (filename) => {
    var placement = 'bottomRight';
    var that = this;
    const db = firebase.firestore();
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref('measures')
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        db.collection('users')
          .doc(this.state.uid)
          .update({
            measurements: url,
          })
          .then(() => {
            notification.open({
              message: 'Measurements Added',
              description:
                'Now you can close the dialog box and scroll down to enter address.',
              onClick: () => {
                console.log('Notification Clicked!');
              },
              placement,
            });
            this.setState({ imageURL: url, uploaded: true });
          })
          .catch((error) => {
            this.setState({
              isUploading: false,
            });
          });
      });
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = (progress) => this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="copyModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="productDetailModal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="text-center">
                  <h4>
                    Please upload image of size below 1MB (png, jpeg, jpg)
                  </h4>
                  <div className="upload-measurement">
                    <img src="./images/file-upload.png" alt="" />
                  </div>
                  <div className="form-group fix-form-group">
                    {this.state.isUploading && (
                      <p>Progress: {this.state.progress}</p>
                    )}
                    {this.state.uploaded ? <p>Uploaded</p> : null}
                    <CustomUploadButton
                      randomizeFilename
                      accept="image/*"
                      storageRef={firebase.storage().ref('measures')}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                      style={{
                        backgroundColor: 'steelBlue',
                        color: 'white',
                        fontWeight: '600',
                        letterSpacing: 1,
                        padding: 10,
                        borderRadius: 4,
                        margin: 30,
                      }}
                    >
                      SELECT YOUR FILE
                    </CustomUploadButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clr"></div>
      </React.Fragment>
    );
  }
}

export default CopyModal;
