import React from 'react';
import classes from './CarouselItem.module.css';

const CarouselItem = ({
  image,
  title = "Kid's wear",
  subtitle = 'Coming Soon',
  description = 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  buttonText = 'Shop Now',
  buttonLink = '/',
}) => {
  // return (
  //   <div
  //     style={{ backgroundImage: `url(${image})` }}
  //     className={classes.container}
  //   >
  //     <div className={classes.innerContainer}>
  //       <div className={classes.subtitle}>{subtitle}</div>
  //       <div className={classes.title}>{title}</div>
  //       <div className={classes.description}>
  //         A specialist label creating luxury essentials. Ethically crafted with
  //         an unwavering commitment to quality.
  //       </div>
  //       <a className={classes.button} href={buttonLink}>
  //         {buttonText}
  //       </a>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <button
        id='request-call-btn'
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '20px',
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '10px',
          border: 'none',
          fontWeight: 'bold',
          width: 'fit-content',
        }}
        onClick={() => {
          window.open('https://wa.link/i276nr');
        }}
      >
        REQUEST A CALL{' '}
      </button>
      <img alt={image} src={image} />
    </div>
  );
};

export default CarouselItem;
