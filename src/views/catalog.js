import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCatalogue from '../components/ProductCatalogue';
import { useParams } from 'react-router-dom';
import { blouseData, bottomData, kurtaData } from '../data/catalog';
import NewHeader from '../components/HomePage/NewHeader';
import NewFooter from '../components/HomePage/NewFooter';

function CatalogPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id === 'bottom') {
      setData(bottomData);
    } else if (id === 'kurta') {
      setData(kurtaData);
    } else {
      setData(blouseData);
    }
  });

  return (
    <div>
      <Header />
      <NewHeader />
      <ProductCatalogue data={data} productName={id} />
      <NewFooter />
    </div>
  );
}

export default CatalogPage;
