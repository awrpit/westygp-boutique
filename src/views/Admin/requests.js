import React from 'react';
import firebase, { firestore } from 'firebase';
import Item from 'antd/lib/list/Item';
import { Button, Card, Col, Row } from 'antd';
import AdminHeader from '../../components/AdminComponents/adminHeader';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processed: false,
      enquiries: [],
      ids: [],
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
        var idArr = [];
        db.collection('enquiries')
          .where('done', '==', false)
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              array.push(doc.data());
              idArr.push(doc.id);
            });
            that.setState({
              processed: true,
              enquiries: array,
              ids: idArr,
            });
          });
      } else {
        window.location.replace('/auth');
      }
    });
  }

  markAsDone(key) {
    const db = firebase.firestore();
    var docId = this.state.ids[key];

    db.collection('enquiries')
      .doc(docId)
      .update({
        done: true,
      })
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <AdminHeader />
        {this.state.processed ? (
          <div className="container mt-5">
            <h1>Requests</h1>
            <h5>
              <a
                style={{
                  color: '#000',
                }}
                href="/delivered"
              >
                Delivered
              </a>{' '}
              |{' '}
              <a
                style={{
                  color: '#000',
                }}
                href="/orders"
              >
                Orders
              </a>
            </h5>
            <br />
            <Row>
              {this.state.enquiries.map((item, index) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card
                      style={{ width: 300, marginBottom: 30 }}
                      cover={<img alt="example" src={item.productImage} />}
                      title={item.product}
                    >
                      <p>{item.userName}</p>
                      <p>{item.userEmail}</p>
                      <p>{item.userPhone}</p>
                      <Button onClick={() => this.markAsDone(index)}>
                        Mark As Done
                      </Button>
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

export default Requests;
