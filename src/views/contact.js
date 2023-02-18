import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Form, Input, notification, Alert } from 'antd';
import firebase from 'firebase';
import NewHeader from '../components/HomePage/NewHeader';
import NewFooter from '../components/HomePage/NewFooter';

const { TextArea } = Input;

export default function Contact(props) {
  const [success, setSuccess] = useState();

  const onFinish = (values) => {
    const db = firebase.firestore();

    db.collection('submissions')
      .doc()
      .set(values)
      .then(() => {
        setSuccess(true);
      });
  };

  const openNotif = (type) => {
    notification[type]({
      message: 'Message Sent!',
      description:
        'Thanks for reaching out to us. Our executive will get back to you in a few days.',
    });
  };

  return (
    <>
      <Header />
      <NewHeader />
      <div
        style={{
          marginTop: 50,
        }}
        className="container"
      >
        <br />
        <div
          style={{
            padding: 20,
            // borderStyle: "solid",
            // borderWidth: 1,
            // borderColor: "#bbb",
            marginBottom: 50,
            textAlign: 'center',
          }}
        >
          <h1>Contact Us</h1>
          <p>
            Feel free to connect to us in case of any query or order request. We
            will reach back to you as soon as possible.
          </p>
          {success ? (
            <Alert
              message="Message Sent"
              description="Thanks for reaching out to us. Our executive will get back to you in a few days."
              type="success"
              showIcon
            />
          ) : null}
          <br />
          <br />
          <Form onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your Name!' }]}
            >
              <Input placeholder="Name" type="text" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your Email!' }]}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please enter your Phone Number!' },
              ]}
            >
              <Input placeholder="Phone Number" type="number" />
            </Form.Item>
            <Form.Item name="message" rules={[{ required: false }]}>
              <TextArea placeholder="Message (if any)" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#000',
                  width: '50%',
                  borderColor: '#000',
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <NewFooter />
    </>
  );
}
