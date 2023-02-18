import React from 'react';
import classes from './PriceSection.module.css';
import PriceSectionItem from './PriceSectionItem';

const PriceSection = () => {
  return (
    <div className={classes.outerContainer}>
      <h5>Uncomplicated Pricing</h5>
      <h1>No hidden charges, no fuss.</h1>
      <div className={classes.innerContainer}>
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/kurta.png"
          name="Kurta"
          price="400"
        />
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/blouse.png"
          name="Blouse"
          price="400"
        />
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/bottom.png"
          name="Bottom"
          price="150"
        />
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/salwar.png"
          name="Salwar Suit"
          price="500"
        />
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/ghagra.png"
          name="Semi-Stitched Ghagra"
          price="500"
        />
        <PriceSectionItem
          link="/catalog/kurta"
          image="/images/charges/gown.png"
          name="Gown"
          price="900"
        />
      </div>
    </div>
  );
};

export default PriceSection;
