import React, { useState } from 'react';
import { DatePicker } from 'antd';
import firebase from 'firebase';

class SchedulePickup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.uid,
      date: '',
      phone: '',
      address: '',
    };
  }

  componentDidMount() {
    console.log(this.state.userId);
  }

  handleSubmit = (e) => {
    console.log(this.state.phone, this.state.date, this.state.address);
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users')
      .doc(this.state.userId)
      .update({
        phoneNumber: this.state.phone,
        address: this.state.address,
        date: this.state.date,
      })
      .then(() => {
        console.log('done');
        window.location.replace('/checkout');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  selectDate = (date, dateString) => {
    this.setState({
      date: dateString,
    });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <div class="schedule-a-pickup mt-5">
            <div class="heading">
              <h1>Schedule a Pickup</h1>
            </div>
            <div class="schedule-form">
              <form onSubmit={this.handleSubmit}>
                {/* <div className='form-group'>
                <DatePicker onChange={this.selectDate} />
              </div> */}
                <input
                  required
                  className="form-group"
                  type="number"
                  id="phone"
                  placeholder="Phone"
                  onChange={this.handleChange}
                />
                <div class="form-group">
                  <textarea
                    required
                    name="address"
                    id="address"
                    rows="3"
                    placeholder="Address with landmark"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="SAVE AND CONTINUE" />
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default SchedulePickup;
