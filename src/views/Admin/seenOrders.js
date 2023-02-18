import React from 'react';
import firebase, { firestore } from 'firebase';
import Item from 'antd/lib/list/Item';
import { Row, Col, Card, Button } from 'antd';
import AdminHeader from '../../components/AdminComponents/adminHeader';

class SeenOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processed: false,
      orders: [],
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
        var keyArr = [];
        db.collection('orders')
          .where('delivered', '==', true)
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              array.push(doc.data());
              keyArr.push(doc.id);
            });
            that.setState({
              processed: true,
              orders: array,
              ids: keyArr,
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

    db.collection('orders')
      .doc(docId)
      .update({
        delivered: true,
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
            <h1>Seen Orders</h1>

            <Row>
              {this.state.orders.map((item, index) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card style={{ width: 300, marginBottom: 30 }}>
                      <p className="font-weight-bold">{item.date}</p>
                      <p className="font-weight-bold">
                        {item.name} ({item.userId})
                      </p>
                      <p className="font-weight-bold">{item.email}</p>
                      <p className="font-weight-bold">{item.phoneNumber}</p>
                      <p className="font-weight-bold">
                        {item.date} - {item.address}
                      </p>
                      <p className="font-weight-bold">
                        Mode - {item.mode} | {item.cost}
                      </p>
                      <ul>
                        {item.preferences.map((elements) => {
                          return (
                            <>
                              {elements.options.map((values) => {
                                return (
                                  <>
                                    {elements.value === values.id ? (
                                      <li>
                                        {values.title} - {values.cost}
                                      </li>
                                    ) : null}
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </ul>
                      <h5>Measurements</h5>
                      <ul>
                        {Object.keys(item.measurements).map((keyValue, i) => {
                          return (
                            <li>
                              {keyValue} - {item.measurements[keyValue]}
                            </li>
                          );
                        })}
                      </ul>
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

export default SeenOrders;
