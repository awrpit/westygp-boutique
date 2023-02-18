import React from 'react';
import classes from './TrySection.module.css';

const GridItem = ({ image, title, desc }) => {
  return (
    <div className={classes.itemContainer}>
      <img className={classes.itemImage} src={image} alt={title} />
      <h3>{title}</h3>
      <p className={classes.itemPara}>{desc}</p>
    </div>
  );
};

const TrySection = () => {
  return (
    <div className={classes.container}>
      <h5>Try Shreya Boutique</h5>
      <h1>Designed to Last A Lifetime</h1>
      <div className={classes.innerGrid}>
        <GridItem
          image="/images/custom fit croped.png"
          title="A custom fit, with zero fabric waste"
          desc="We encourage women to embrace their uniqueness and love their unique bodies by creating made-to-measure clothes from their favourite fabrics. Custom-made production means no stock, no overproduction, no waste.
"
        />
        <GridItem
          image="/images/Dynamic customization icon cropped.png"
          title="Dynamic customization for creative you"
          desc="There is a smile on your face, when you wear our pieces because they are tailor made, one of a kind for you with your Ideas Implemented on them. You may design your own cloth pattern by our dashboard or select an already customized design from the cloth category.
"
        />
        <GridItem
          image="/images/cropped Convenience galore.png"
          title="Convenience Galore! Smooth as butter"
          desc="Our team is committed to delivering your pieces in record time. your clothes are a reflection of you as they are designed, based on your tastes and preferences.
"
        />
      </div>
    </div>
  );
};

export default TrySection;
