import React from 'react';
import firebase from 'firebase';
import { Result, Button, Spin, Card, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderSummary from '../../components/PreviewOrder/OrderSummary';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      isSignedIn: false,
      user: '',
      orders: [],
      address: '',
      photo: false,
      haveOrdered: false,
    };
  }

  componentDidMount() {
    var that = this;
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (user.photoURL === null) {
          that.setState({
            photo: false,
          });
        } else {
          that.setState({
            photo: true,
          });
        }

        db.collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.data().orders.length === 0) {
              that.setState({
                fetching: false,
                isSignedIn: true,
                user: user,
                address: doc.data().address,
                haveOrdered: false,
              });
            } else {
              that.setState({
                fetching: false,
                isSignedIn: true,
                user: user,
                address: doc.data().address,
                haveOrdered: true,
              });
            }

            db.collection('orders')
              .where('userId', '==', user.uid)
              .get()
              .then((snapshot) => {
                var arr = [];
                snapshot.docs.forEach((doc) => {
                  arr.push(doc.data());
                });

                that.setState({
                  orders: arr,
                });
              });
          })
          .catch((error) => {
            that.setState({
              fetching: true,
              isSignedIn: false,
            });
            console.log('error');
          });
      } else {
        window.location.replace('/auth');
      }
    });
  }

  items = [{ label: 'something', cost: 688 }];

  antIcon = (<LoadingOutlined style={{ fontSize: 24 }} spin />);

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.replace('/auth');
      })
      .catch(() => {
        window.location.replace('/error');
      });
  };

  render() {
    return (
      <div>
        <Header />
        <NewHeader />
        {this.state.fetching ? (
          <div>
            <Spin indicator={this.antIcon}>
              <Result
                status="403"
                title="Please Login"
                subTitle="You must be signed in to keep a track of your orders and user profile."
                extra={
                  <Button type="primary" danger>
                    Make An Account
                  </Button>
                }
              />
            </Spin>
          </div>
        ) : (
          <div>
            {this.state.isSignedIn ? (
              <div className="container">
                <section className="mt-5">
                  {this.state.photo ? null : <div></div>}
                  <h4>
                    {this.state.user.displayName}{' '}
                    <Button onClick={this.signOut}>LOGOUT</Button>
                  </h4>
                  <p>{this.state.user.email}</p>
                  <p>{this.state.address}</p>
                </section>
                <section className="mt-4 mb-5">
                  {this.state.haveOrdered ? (
                    <div>
                      <Row>
                        {this.state.orders.map((item, index) => {
                          return (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                              <Card
                                style={{
                                  width: 300,
                                }}
                                title={item.product}
                              >
                                <p>Order Date - {item.date}</p>
                                <p>
                                  Rs.{item.cost} (Mode - {item.mode})
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
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  ) : (
                    <section className="text-center">
                      <Result
                        status="404"
                        title="You have shopped nothing!"
                        subTitle="What you are waiting for? Shop now!"
                        extra={
                          <Button href="/" type="primary">
                            Shop Now
                          </Button>
                        }
                      />
                    </section>
                  )}
                </section>
              </div>
            ) : (
              <Result
                status="403"
                title="Please Login"
                subTitle="You must be signed in to keep a track of your orders and user profile."
                extra={
                  <Button type="primary" danger>
                    Make An Account
                  </Button>
                }
              />
            )}
          </div>
        )}
        <NewFooter />
      </div>
    );
  }
}

export default UserPage;
