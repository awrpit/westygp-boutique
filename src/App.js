import React from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Spin } from 'antd';
import { LoadingOutlined, CloseOutlined } from '@ant-design/icons';

// UNTIL LOAD
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBannerCaraousel from './components/HomeBannerCarousel';

// PAGES
import MainPage from './views/main';
import CatalogPage from './views/catalog';
import AuthPage from './views/Auth/auth';
import UserPage from './views/Auth/user';
import CartPage from './views/Auth/cart';
import OrderPage from './views/Order/order';
import CheckoutPage from './views/Order/checkout';
import FormPage from './views/form';
import Dashboard from './components/DesignYourself';
// ADMIN PAGES
import AdminPage from './views/Admin/orders';

// STATIC PAGES
import ErrorPage from './views/StaticPages/error';
import AboutPage from './views/StaticPages/about';
import SuccessPage from './views/StaticPages/success';
import ContactPage from './views/contact';
import Requests from './views/Admin/requests';
import Delivered from './views/Admin/seenRequests';
import ComingSoon from './views/comingsoon';
import FormSubmissions from './views/Admin/contact';
import Orders from './views/Admin/orders';
import SeenOrders from './views/Admin/seenOrders';
import Measure from './views/Order/measure';

import Modal from 'react-modal';

const firebaseConfig = {
  apiKey: 'AIzaSyDIHHmw8roGq7cbajm-0IXGqjIS19GJ-S4',
  authDomain: 'westygo-12bdc.firebaseapp.com',
  databaseURL: 'https://westygo-12bdc.firebaseio.com',
  projectId: 'westygo-12bdc',
  storageBucket: 'westygo-12bdc.appspot.com',
  messagingSenderId: '180494566110',
  appId: '1:180494566110:web:75af6a29b97a4a5347f84f',
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: true,
      isDialogOpen: false,
    };
  }

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.setState({
          processing: false,
        });
      } else {
        that.setState({
          processing: false,
        });
      }
    });

    const dataCollected = window.localStorage.getItem('dataCollected');

    if (!dataCollected || dataCollected === '0') {
      setTimeout(() => {
        this.setState({
          isDialogOpen: true,
        });
      }, 5000);
    }
  }

  antIcon = (<LoadingOutlined style={{ fontSize: 24 }} spin />);

  render() {
    return (
      <React.Fragment>
        {/* <Modal
          id='dialog-form'
          // style={{
          //   content: {
          //     width: '640px',
          //     height: '600px',
          //     maxWidth: '90vw',
          //     margin: 'auto',
          //     padding: '20px 50px',
          //   },
          // }}
          isOpen={this.state.isDialogOpen}
          onRequestClose={() =>
            this.setState({
              isDialogOpen: false,
            })
          }
        >
          <CloseOutlined
            style={{
              fontSize: 20,
              position: 'absolute',
              top: 5,
              right: 5,
              padding: 5,
            }}
            onClick={() => {
              this.setState({ isDialogOpen: false });
              window.localStorage.setItem('dataCollected', '1');
            }}
          />
          <iframe
            title="Request assistance from designer form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfkude8nem6FACReqQOexGD08wf-V3kpmyIrqB_jW4ONA0_nA/viewform?embedded=true"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Modal> */}
        <BrowserRouter>
          <div>
            <Route path="/" exact component={MainPage} />
            <Route path="/catalog/:id" component={CatalogPage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/measure" component={Measure} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/connect/:selection" component={FormPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/soon/:product" component={ComingSoon} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/success" component={SuccessPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/orders" component={Orders} />
            <Route path="/seen-orders" component={SeenOrders} />
            <Route path="/seen-requests" component={Delivered} />
            <Route path="/requests" component={Requests} />
            <Route path="/form-submissions" component={FormSubmissions} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
