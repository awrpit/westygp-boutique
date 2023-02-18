import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './ProductCard.module.css';

const ProductCard = ({ title, image, link }) => {
  const history = useHistory();

  return (
    <div className={classes.container}>
      <img
        onClick={() => history.push(link)}
        className={classes.image}
        src={image}
        alt={title}
      />
      <a className={classes.title} href={link}>
        {title}
      </a>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          console.log(link);
          history.push(link);
        }}
        className={classes.viewMoreButton}
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default ProductCard;
