import React from 'react';
import firebase, { firestore } from 'firebase';
import Item from 'antd/lib/list/Item';
import { Row, Col, Card, Button } from 'antd';
import AdminHeader from '../../components/AdminComponents/adminHeader';
import FlexContainer from '../../components/Utility/FlexContainer';

const getDateObj = (dateString) => {
  var dateParts = dateString.split('/');

  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  return dateObject;
};

const Label = ({ text }) => {
  return <p>{text}:</p>;
};

const ItemValue = ({ text }) => {
  return <p className="font-weight-bold">{text}</p>;
};

class Orders extends React.Component {
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
          .where('delivered', '==', false)
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
            <h1>Orders Placed</h1>
            <p>Sorted by: Date (new first)</p>

            <Row style={{ gap: '150px' }}>
              {this.state.orders
                .sort(function (a, b) {
                  return getDateObj(b.date) - getDateObj(a.date);
                })
                .map((item, index) => {
                  return (
                    <Col
                      style={{ padding: 20 }}
                      xs={24}
                      sm={24}
                      md={12}
                      lg={8}
                      xl={8}
                    >
                      <Card style={{ width: 400, marginBottom: 30 }}>
                        <FlexContainer>
                          <Label text="Customer name" />
                          <ItemValue text={item.name} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Customer email" />
                          <ItemValue text={item.email} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Customer mobile" />
                          <ItemValue text={item.phoneNumber} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Date" />
                          <ItemValue text={item.date} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Customer address" />
                          <ItemValue text={item.address} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Order total" />
                          <ItemValue text={`₹ ${item.cost}`} />
                        </FlexContainer>
                        <FlexContainer>
                          <Label text="Payment mode" />
                          <ItemValue text={item.mode} />
                        </FlexContainer>
                        <h5>Product details</h5>
                        <FlexContainer>
                          <Label text="Product type" />
                          <ItemValue text={item.product} />
                        </FlexContainer>
                        <ul>
                          {item.preferences.map((elements) => {
                            console.log('Item', item);

                            return (
                              <>
                                {elements.options.map((values) => {
                                  return (
                                    <>
                                      {elements.value === values.id ? (
                                        <li style={{ textTransform: 'capitalize' }}>
                                          {values.title} (₹ {values.cost})
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
                          {Object.keys(item.measurements).length === 0 && (
                            <p>No measurements provided.</p>
                          )}
                          {Object.keys(item.measurements).map((keyValue, i) => {
                            return (
                              <li>
                                {keyValue} - {item.measurements[keyValue]}
                              </li>
                            );
                          })}
                        </ul>
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

export default Orders;
