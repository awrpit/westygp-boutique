import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import NewHeader from '../../components/HomePage/NewHeader';
import NewFooter from '../../components/HomePage/NewFooter';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewHeader />
        <AboutUs />
        <NewFooter />
      </div>
    );
  }
}

export default AboutPage;
