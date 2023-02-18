import React from 'react';
import firebase, { firestore } from 'firebase';
import Item from 'antd/lib/list/Item';
import { Button, Card, Col, Row } from 'antd';
import AdminHeader from '../../components/AdminComponents/adminHeader';

class FormSubmissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processed: false,
      arr: [],
    };
  }

  componentDidMount() {
    var that = this;
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged(function (user) {
      if (
        user.email === 'dhaiwatp3@gmail.com' ||
        user.email === 'shreyaboutique.work@gmail.com'
      ) {
        var array = [];
        db.collection('submissions')
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              array.push(doc.data());
            });
            that.setState({
              arr: array,
              processed: true,
            });
          });
      } else {
        window.location.replace('/auth');
      }
    });
  }

  render() {
    return (
      <div>
        <AdminHeader />
        {this.state.processed ? (
          <div className="container mt-5">
            <h1>Form Submissions</h1>
            <br />
            <Row>
              {this.state.arr.map((item, index) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card style={{ width: 300, marginBottom: 30 }}>
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                      <p>{item.phoneNumber}</p>
                      <p>{item.message}</p>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default FormSubmissions;
