import React from 'react';
import firebase from 'firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DatePicker, Card, Button, Form, Input, message } from 'antd';
import NewHeader from '../components/HomePage/NewHeader';
import NewFooter from '../components/HomePage/NewFooter';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      selection: this.props.match.params.selection,
      date: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };

  onSubmit = (e) => {
    const db = firebase.firestore();
    e.preventDefault();
    if (this.state.phone.length === 0) {
      message.error('Please enter your phone number to continue.');
    } else {
      db.collection('meeting')
        .doc()
        .set({
          name: this.state.name,
          phoneNumber: this.state.phone,
          date: this.state.date,
          selection: this.state.selection,
        })
        .then(() => {
          window.location.replace('/success');
        })
        .catch(() => {
          message.error('Failed to make a request, please try again.');
        });
    }
  };

  render() {
    return (
      <>
        <Header />
        <NewHeader />
        <div className="container pt-5 pb-5">
          <Card
            title={this.state.selection}
            bordered={false}
            style={{
              width: '70%',
              marginBottom: '50px',
              backgroundColor: '#DCDCDC',
            }}
          >
            <p>
              Our executive will call you on the phone number you submit to
              understand your requirements and proceed with the stitching of
              your clothes.
            </p>
          </Card>
          <Form>
            <Form.Item required>
              <Input
                onChange={(data) => this.onChange(data)}
                style={{ width: '200px' }}
                id="name"
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item required>
              <Input
                type="number"
                onChange={(data) => this.onChange(data)}
                id="phone"
                style={{ width: '200px' }}
                placeholder="Phone Number"
              />
            </Form.Item>
            <Form.Item required>
              <DatePicker
                showTime
                onChange={(value, dateString) => {
                  this.setState({
                    date: dateString,
                  });
                }}
              />
            </Form.Item>
            <Button onClick={this.onSubmit} type="primary">
              Submit
            </Button>
          </Form>
        </div>
        <NewFooter />
      </>
    );
  }
}

export default FormPage;
