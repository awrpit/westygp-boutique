import React from 'react';
import firebase from 'firebase';

import { Row, Col, Card, Result, Button, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class CartPage extends React.Component {
  state = {
    cart: [],
    selection: '',
    showMessage: false,
    loading: true,
    userData: '',
  };

  antIcon = (<LoadingOutlined style={{ fontSize: 24 }} spin />);

  componentDidMount() {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            this.setState({
              userData: doc.data(),
            });

            if (doc.data().cart.length === 0) {
              this.setState({
                showMessage: true,
              });
            } else {
              this.setState({
                cart: doc.data().cart.preferences,
                selection: doc.data().cart.category,
                loading: false,
              });
            }
          });
      } else {
        window.location.replace('/auth');
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <NewHeader />
        <div
          style={{
            marginTop: 60,
            marginBottom: 100,
          }}
          className="container"
        >
          {this.state.showMessage ? (
            <section className="text-center">
              <Result
                status="404"
                title="You have shopped nothing!"
                subTitle="What you are waiting for? Shop now!"
                extra={
                  <Button
                    style={{
                      backgroundColor: '#000',
                      borderColor: '#000',
                    }}
                    href="/"
                    type="primary"
                  >
                    Shop Now
                  </Button>
                }
              />
            </section>
          ) : (
            <>
              {this.state.loading ? (
                <div
                  style={{
                    textAlign: 'center',
                    height: '30vh',
                  }}
                >
                  <Spin indicator={this.antIcon} />
                </div>
              ) : (
                <>
                  <h1>{this.state.selection}</h1>
                  <Row>
                    {this.state.cart.map((item) => {
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
                                      />
                                      <p className="font-weight-bold">
                                        {elements.title}
                                      </p>
                                      <p>₹ {elements.cost}/-</p>
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                  <br />
                  <Button
                    onClick={() => {
                      if (this.state.userData.phoneNumber.length === 0) {
                        window.location.replace('/order');
                      } else {
                        window.location.replace('/checkout');
                      }
                    }}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      borderColor: '#000',
                    }}
                  >
                    Continue Purchase
                  </Button>
                </>
              )}
            </>
          )}
        </div>
        <NewFooter />
      </div>
    );
  }
}

export default CartPage;
