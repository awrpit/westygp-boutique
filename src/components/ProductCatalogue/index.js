import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../actions/actionTypes';

import Dropdown from '../Utility/Dropdown';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const sortOptions = [
  {
    label: 'Newest',
    value: 'newest',
  },
  {
    label: 'Featured',
    value: 'featured',
  },
];

const imgSrc1 = '/images/ghagra.jpg';
const imgSrc2 = '/images/ghagra2.jpg';

export default ({ productName, data }) => {
  const [sortOption, setSortOption] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const products = data;

  const handleDashboardRedirect = () => {
    if (productName == 'blouse') {
      dispatch({ type: CHANGE_CATEGORY, categoryId: 1001 });
      history.push('/dashboard');
    }

    if (productName == 'kurta') {
      dispatch({ type: CHANGE_CATEGORY, categoryId: 1000 });
      history.push('/dashboard');
    }

    if (productName == 'bottom') {
      dispatch({ type: CHANGE_CATEGORY, categoryId: 1002 });
      history.push('/dashboard');
    }
  };

  return (
    <React.Fragment>
      <section className="section-padding pt-5">
        <div className="fix-center">
          <div className="heading">
            <h1>Product Catalogue</h1>
          </div>

          <div className="prod-name-filter mb-4 d-flex justify-content-between">
            <div>
              <b>Product Name : </b>
              {productName}
            </div>
            <div>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderColor: '#fff',
                }}
                onClick={handleDashboardRedirect}
              >
                Design {productName}
              </Button>
            </div>
          </div>

          <div className="row product-catalogue-row">
            {products.map((product) => (
              <>
                {product.title === 'Sharara Pants' ? null : product.title ===
                  'Flared Skirts' ? null : (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description="Place a request order if you liked the design or embroidery. Our team will get back to you with all the details!"
                    price={product.baseCost}
                    images={product.images}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* {products.map((product) => (
        <ProductModal productData={product} />
      ))} */}
    </React.Fragment>
  );
};
