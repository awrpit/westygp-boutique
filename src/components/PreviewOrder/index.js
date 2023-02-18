import React, { useState } from 'react';
import PointsToRemember from './PointsToRemember';
import CustomizationSummary from './CustomizationSummary';
import MeasurementSelection from './MeasurementSelection';
import OrderSummary from './OrderSummary';
import SchedulePickup from './SchedulePickup';
import OrderPlaced from './OrderPlaced';

const items = [
  {
    id: 1,
    type: 'Neck',
    selectedValue: 'Boat Neck',
    imgSrc: '/images/cart-item.png',
  },
  {
    id: 2,
    type: 'Neck',
    selectedValue: 'Boat Neck',
    imgSrc: '/images/cart-item.png',
  },
  {
    id: 3,
    type: 'Neck',
    selectedValue: 'Boat Neck',
    imgSrc: '/images/cart-item.png',
  },
  {
    id: 4,
    type: 'Neck',
    selectedValue: 'Boat Neck',
    imgSrc: '/images/cart-item.png',
  },
];

const testItems = [
  {
    id: 1,
    label: 'Stitching',
    cost: 200,
  },
  {
    id: 2,
    label: 'Dupatta',
    cost: 400,
  },
];

export default () => {
  return (
    <React.Fragment>
      <section className="section-padding carousel">
        <div className="heading">
          <h1>Preview Order and Checkout</h1>
        </div>
        <div className="fix-center-preview-page">
          <PointsToRemember />
          <CustomizationSummary items={items} />
          <MeasurementSelection />
          <OrderSummary
            items={testItems}
            deliveryCharge={60}
            discount={100}
            addOns={testItems}
          />
          <SchedulePickup />
          <OrderPlaced />
        </div>
      </section>
    </React.Fragment>
  );
};
