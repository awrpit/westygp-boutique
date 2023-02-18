import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class SuccessPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NewHeader />
        <Result
          icon={<SmileOutlined />}
          title="Great, we will get back to you soon!"
          extra={
            <Button href="/" type="primary">
              Shop More
            </Button>
          }
        />
        <NewFooter />
      </>
    );
  }
}

export default SuccessPage;
