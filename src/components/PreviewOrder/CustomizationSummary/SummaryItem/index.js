import React from 'react';

export default ({ imgSrc, type, selectedValue }) => {
  return (
    <React.Fragment>
      <div class="cart-items-alone">
        <div class="d-flex justify-content-start align-items-center">
          <div class="cart-item-img">
            <img src={imgSrc} alt="" />
          </div>
          <p>
            {' '}
            <b>{type} :</b> {selectedValue}
            <i class="fa fa-times-circle" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
