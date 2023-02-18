import React from 'react';
import firebase from 'firebase';
import { Spin, Result, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MeasurementSelection from '../../components/PreviewOrder/MeasurementSelection';
import SchedulePickup from '../../components/PreviewOrder/SchedulePickup';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      fetching: true,
      shopped: false,
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
            var cart = doc.data().cart;
            console.log(cart.length);
            if (cart.length === 0) {
              that.setState({
                shopped: false,
                fetching: false,
                isSignedIn: true,
                user: user,
              });
            } else {
              that.setState({
                fetching: false,
                isSignedIn: true,
                user: user,
                shopped: true,
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
                    {/* <MeasurementSelection uid={this.state.user.uid} /> */}
                    <SchedulePickup uid={this.state.user.uid} />
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

export default OrderPage;
