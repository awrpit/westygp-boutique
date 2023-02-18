import React from 'react';
import firebase from 'firebase';
import { Spin, Result, Button, notification, Card, Row, Col } from 'antd';
import {
  LoadingOutlined,
  EditFilled,
  HomeOutlined,
  UpSquareOutlined,
} from '@ant-design/icons';
import rn from 'random-string';
import axios from 'axios';
import Razorpay from 'razorpay';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderSummary from '../../components/PreviewOrder/OrderSummary';
import OrderPlaced from '../../components/PreviewOrder/OrderPlaced';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

const prices = {
  Kurta: 400,
  Blouse: 400,
  'Salwar Suit': 500,
  Bottom: 150,
};

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      isSignedIn: false,
      fetching: true,
      shopped: false,
      userData: [],
      orderPlaced: false,
      orderId: '',
      cost: '',
      cart: [],
    };
  }

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const db = firebase.firestore();
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            var userData = doc.data();
            console.log(userData.address);
            var cart = doc.data().cart;
            console.log(cart.length);
            if (cart.length === 0) {
              that.setState({
                shopped: false,
                fetching: false,
                isSignedIn: true,
                user: user,
                userData: userData,
              });
            } else {
              that.setState({
                fetching: false,
                isSignedIn: true,
                user: user,
                shopped: true,
                userData: userData,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
      }
    });
  }

  antIcon = (<LoadingOutlined style={{ fontSize: 24 }} spin />);

  confirmCOD = () => {
    var placement = 'bottomRight';
    notification.open({
      message: 'Processing Order, Please wait.',
      description:
        'Kindly hold on for a few seconds until we place an order for you.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement,
    });
    var key = rn();
    this.setState({
      orderId: key,
    });

    var d = new Date();
    var date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

    const db = firebase.firestore();
    db.collection('orders')
      .doc(key)
      .set({
        name: this.state.user.displayName,
        email: this.state.user.email,
        phoneNumber: this.state.userData.phoneNumber,
        address: this.state.userData.address,
        preferences: this.state.userData.cart.preferences,
        product: this.state.userData.cart.category,
        userId: this.state.user.uid,
        date: date,
        delivered: false,
        mode: 'COD (Cash On Delivery)',
        cost: this.state.userData.cost,
        measurements: this.state.userData.measurements,
      })
      .then(() => {
        db.collection('users')
          .doc(this.state.user.uid)
          .update({
            orders: [
              {
                cart: this.state.userData.cart,
              },
              { date: new Date() },
              { orderId: key },
            ],
          })
          .then(() => {
            db.collection('users')
              .doc(this.state.user.uid)
              .update({ cart: [] })
              .then(() => {
                db.collection('users')
                  .doc(this.state.user.uid)
                  .update({
                    cart: [],
                    measurements: '',
                  })
                  .then(() => {
                    axios
                      .post('https://westygo-api.herokuapp.com/message', {
                        mail: this.state.user.email,
                        subject: `Thanks for placing an order ${this.state.user.displayName} - ShreyaBoutique.com | Order ID - ${key}`,
                        message: `We are so glad that you placed an order. Here's your Order ID - ${key}. You can track your orders on https://shreyaboutique.com/user. Our team will call you to confirm about any extras with the order within the next 2 days on the provided phone number. In case you have any doubt, feel free to contact us at shreyaboutique1@gmail.com       Regards, Team SB.`,
                      })
                      .then(() => {
                        this.setState({
                          orderPlaced: true,
                        });
                      })
                      .catch(() => {
                        this.setState({
                          orderPlaced: true,
                        });
                      });
                  });
              });
          });
      });
  };

  paymentHandler = async (e) => {
    const receipt = rn();
    const API_URL = 'https://westygo-api.herokuapp.com/';
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await axios.post(orderUrl, {
      amount: this.state.cost,
    });
    const { data } = response;
    const options = {
      key: 'rzp_test_YeyYxX0VwMv7hm',
      name: 'Shreya Boutique',
      description: 'Customize and buy clothes online.',
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          // const url = `${API_URL}capture/${paymentId}`;
          // const captureResponse = await axios.post(url, {
          //     amount: this.state.cost
          // })
          // console.log(captureResponse.data);

          this.setState({
            orderId: data.id,
          });

          const key = data.id;

          var d = new Date();
          var date = `${d.getDate}/${d.getMonth}/${d.getFullYear}`;

          const db = firebase.firestore();
          await db
            .collection('orders')
            .doc(key)
            .set({
              name: this.state.user.displayName,
              email: this.state.user.email,
              phoneNumber: this.state.userData.phoneNumber,
              address: this.state.userData.address,
              preferences: this.state.userData.cart.preferences,
              product: this.state.userData.cart.category,
              userId: this.state.user.uid,
              date: date,
              delivered: false,
              mode: 'Paid Online',
              cost: this.state.userData.cost,
              measurements: this.state.userData.measurements,
            })
            .then(() => {
              db.collection('users')
                .doc(this.state.user.uid)
                .update({
                  orders: [
                    {
                      cart: this.state.userData.cart,
                    },
                    { date: new Date() },
                    { orderId: key },
                  ],
                })
                .then(() => {
                  db.collection('users')
                    .doc(this.state.user.uid)
                    .update({
                      cart: [],
                      measurements: '',
                    })
                    .then(() => {
                      axios
                        .post('https://westygo-api.herokuapp.com/message', {
                          mail: this.state.user.email,
                          subject: `Thanks for placing an order ${this.state.user.displayName} - ShreyaBoutique.com | Order ID - ${key}`,
                          message: `We are so glad that you placed an order. Here's your Order ID - ${key}. You can track your orders on https://shreyaboutique.com/user. Our team will call you to confirm about any extras with the order within the next 2 days on the provided phone number. In case you have any doubt, feel free to contact us at shreyaboutique1@gmail.com       Regards, Team SB.`,
                        })
                        .then(() => {
                          this.setState({
                            orderPlaced: true,
                          });
                        })
                        .catch(() => {
                          this.setState({
                            orderPlaced: true,
                          });
                        });
                    });
                });
            });
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: '#000000',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  render() {
    return (
      <div>
        {this.state.fetching ? (
          <div>
            <Spin indicator={this.antIcon} size="large">
              <Header />
              <NewHeader />
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
              <NewFooter />
            </Spin>
          </div>
        ) : (
          <div>
            {this.state.isSignedIn ? (
              <div>
                {this.state.shopped ? (
                  <div>
                    <Header />
                    <NewHeader />
                    {this.state.orderPlaced ? (
                      <div>
                        <OrderPlaced orderId={this.state.orderId} />
                      </div>
                    ) : (
                      <div>
                        <div className="container mt-5">
                          <h4>
                            Your Order Includes (
                            {this.state.userData.cart.category} - ₹{' '}
                            {prices[this.state.userData.cart.category]})
                          </h4>
                          <Row>
                            {this.state.userData.cart.preferences.map(
                              (item) => {
                                return (
                                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                    <Card
                                      style={{
                                        width: 300,
                                        marginBottom: 5,
                                      }}
                                    >
                                      {item.options.map((elements) => {
                                        return (
                                          <>
                                            {item.value === elements.id ? (
                                              <div>
                                                <img
                                                  src={`dashboard_images/${elements.title}.png`}
                                                  width="140"
                                                />
                                                <p className="font-weight-bold">
                                                  {elements.title}
                                                </p>
                                                <p>₹{elements.cost} /-</p>
                                              </div>
                                            ) : null}
                                          </>
                                        );
                                      })}
                                    </Card>
                                  </Col>
                                );
                              }
                            )}
                          </Row>
                          <br />
                          <h4>Order Info</h4>
                          <p>
                            <span className="font-weight-bold">Address</span> -{' '}
                            {this.state.userData.address}{' '}
                            <Button
                              type="default"
                              icon={<EditFilled />}
                              shape="circle"
                              href="/order"
                            />
                          </p>
                          <p>
                            <span className="font-weight-bold">
                              Phone Number
                            </span>{' '}
                            - {this.state.userData.phoneNumber}{' '}
                            <Button
                              type="default"
                              icon={<EditFilled />}
                              shape="circle"
                              href="/order"
                            />
                          </p>
                          <h5>Total - {this.state.userData.cost} /-</h5>
                          <br />
                          <div className="mb-4">
                            <Button
                              style={{
                                backgroundColor: '#000',
                                borderColor: '#000',
                              }}
                              icon={<HomeOutlined />}
                              type="primary"
                              onClick={this.confirmCOD}
                            >
                              Cash On Delivery
                            </Button>{' '}
                            {/* <span className="font-weight-bold">or</span>{' '} */}
                            {/* <Button
                              style={{
                                backgroundColor: '#000',
                                borderColor: '#000',
                              }}
                              icon={<UpSquareOutlined />}
                              type="primary"
                              onClick={this.paymentHandler}
                            >
                              Pay Online
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    )}
                    <NewFooter />
                  </div>
                ) : (
                  <div>
                    <Header />
                    <NewHeader />
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
                    <NewFooter />
                  </div>
                )}
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
      </div>
    );
  }
}

export default CheckoutPage;
