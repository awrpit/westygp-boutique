import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewFooter from '../../components/HomePage/NewFooter';
import NewHeader from '../../components/HomePage/NewHeader';
import SelectMeasurements from '../../components/SelectMeasurements';

function Measure() {
  return (
    <>
      <Header />
      <NewHeader />
      <SelectMeasurements />
      <NewFooter />
    </>
  );
}

export default Measure;
