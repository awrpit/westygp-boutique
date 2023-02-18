import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';

export default ({ heading, description, shopLink, categoryId, imgSrc }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleDashboardRedirect = () => {
    dispatch({ type: CHANGE_CATEGORY, categoryId });
    history.push('/dashboard');
  };

  return (
    <div className="item">
      <div className="img-wrapper">
        <img
          style={{ height: '500px', width: 'auto', margin: 'auto' }}
          src={imgSrc}
          alt=""
        />
        <div className="prods-overlay-text">
          <h4>{heading}</h4>
          <p>{description}</p>
          <div className="d-flex">
            <a className="black-btn" href={shopLink}>
              VIEW MORE
            </a>
            <a onClick={handleDashboardRedirect} className="white-btn">
              Design Yourself
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
