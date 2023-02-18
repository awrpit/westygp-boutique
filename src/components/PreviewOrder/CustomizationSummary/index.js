import React from 'react';
import SummaryItem from './SummaryItem';

export default ({ items }) => {
  if (items && items.length > 0) {
    return (
      <React.Fragment>
        <div className="cart-items">
          <h2 className="w-100 text-center mb-4">Your Customized Kurta</h2>
          <div className="cart-wrapper">
            {items.map((item) => (
              <SummaryItem
                imgSrc={item.imgSrc}
                type={item.type}
                selectedValue={item.selectedValue}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
};
