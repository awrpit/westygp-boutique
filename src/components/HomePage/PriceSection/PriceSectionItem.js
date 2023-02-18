import React from 'react';
import classes from './PriceSectionItem.module.css';

const PriceSectionItem = ({ image, name, price, link }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt={name} />
      <div className={classes.innerContainer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>Rs. {price} onwards</span>
      </div>
    </div>
  );
};

export default PriceSectionItem;
