import React, { useState } from 'react';
import firebase from 'firebase';
import { notification } from 'antd';
import FormInput from '../../../Utility/FormInput';

class MeasureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.uid,
      height: '',
      weight: '',
      chest: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users')
      .doc(this.props.uid)
      .update({
        measurements: {
          chest: this.state.chest,
          height: this.state.height,
          weight: this.state.weight,
        },
      })
      .then(() => {
        var placement = 'bottomRight';
        console.log('Works');
        notification.open({
          message: 'Measurements Added',
          description:
            'Now you can close the dialog box and scroll down to enter address.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
          placement,
        });
      })
      .catch((error) => window.location.replace('/error'));
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="measureModal"
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
                  <h4>Measure yourself</h4>
                  <form onSubmit={this.handleSubmit} id="measure-yourself">
                    <input
                      placeholder="height in units"
                      id="height"
                      name="height"
                      onChange={this.handleChange}
                      label="Full length"
                    />
                    <input
                      name="weight"
                      onChange={this.handleChange}
                      placeholder="Weight in units"
                      id="weight"
                      label="Weight"
                    />
                    <input
                      name="chest"
                      onChange={this.handleChange}
                      placeholder="Shoulder in units"
                      id="chest"
                      label="Chest round"
                    />
                    <div className="form-group">
                      <input type="submit" value="SUBMIT" id="" />
                    </div>
                  </form>
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

export default MeasureModal;
