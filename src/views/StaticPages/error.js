import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../../components/NotFound';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewHeader />
        <NotFound />
        <NewFooter />
      </div>
    );
  }
}

export default ErrorPage;
