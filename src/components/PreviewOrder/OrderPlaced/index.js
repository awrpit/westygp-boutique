import React from 'react';
import { Button } from 'antd';

class OrderPlaced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: this.props.orderId,
    };
  }

  componentDidMount() {
    if (this.state.orderId === 0) {
      window.location.replace('/');
    } else {
    }
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <div className="order-placed-message">
            <h1>
              Your Order <br /> has been placed
            </h1>
            <h4>Order ID - {this.state.orderId} (note it)</h4>
            <Button type="primary" href="/">
              Shop
            </Button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default OrderPlaced;
