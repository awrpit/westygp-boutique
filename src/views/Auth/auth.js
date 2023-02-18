import React from 'react';
import firebase from 'firebase';
import { Spin, Button } from 'antd';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      isSignedIn: false,
    };
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        var that = this;
        const db = firebase.firestore();
        firebase.auth().onAuthStateChanged(function (user) {
          db.collection('users')
            .doc(user.uid)
            .get()
            .then((doc) => {
              if (!doc.data()) {
                if (user) {
                  db.collection('users')
                    .doc(user.uid)
                    .set({
                      name: user.displayName,
                      userId: user.uid,
                      email: user.email,
                      phoneNumber: '',
                      address: '',
                      date: '',
                      measurements: '',
                      cart: {},
                      orders: [],
                    })
                    .then(() => {
                      axios
                        .post('https://westygo-api.herokuapp.com/message', {
                          mail: user.email,
                          subject: `${user.displayName}, thanks for logging into ShreyaBoutique.com`,
                          message: `Hello ${user.displayName}! You have been successfully logged into your account on ShreyaBoutique.com. You can track your orders and address on https://shreyaboutique.com/user . Your user email - ${user.email}, this would help you in communicating with the support.`,
                        })
                        .then(() => {
                          console.log('Mailed!');
                          that.setState({
                            isSignedIn: true,
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    });
                } else {
                  window.location.replace('/error');
                }
              } else {
                //
              }
            });
        });
      },
    },
  };

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.setState({
          fetching: false,
          isSignedIn: true,
        });
      } else {
        that.setState({
          fetching: false,
          isSignedIn: false,
        });
      }
    });
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  antIcon = (<LoadingOutlined style={{ fontSize: 24 }} spin />);

  render() {
    return (
      <div>
        <Header />
        <NewHeader />
        <React.Fragment>
          {this.state.fetching ? (
            <div>
              <Spin size={'large'} indicator={this.antIcon}>
                <section className="register">
                  <div className="fix-center">
                    <div className="register-form-wrapper">
                      <div className="left-register">
                        <div className="heading">
                          <h1>Sign Up</h1>
                        </div>
                        <p>Sign up to create an account using Google/Email.</p>

                        <div className="follow-us">
                          <p>To get updates, Follow us on:</p>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                      <div className="right-register">
                        <StyledFirebaseAuth
                          uiConfig={this.uiConfig}
                          firebaseAuth={firebase.auth()}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Spin>
            </div>
          ) : (
            <div>
              <section className="register">
                <div className="fix-center">
                  <div className="register-form-wrapper">
                    <div className="left-register">
                      <div className="heading">
                        <h1>Join</h1>
                      </div>
                      <p>Sign up to create an account using Google/Email.</p>

                      <div className="follow-us">
                        <p>To get updates, Follow us on:</p>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="right-register">
                      {this.state.isSignedIn ? (
                        <div className="text-center mt-5">
                          <h5>Already logged in!</h5>
                          <Button href="/user">User Profile</Button>
                        </div>
                      ) : (
                        <StyledFirebaseAuth
                          uiConfig={this.uiConfig}
                          firebaseAuth={firebase.auth()}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </React.Fragment>
        <NewFooter />
      </div>
    );
  }
}

export default AuthPage;
