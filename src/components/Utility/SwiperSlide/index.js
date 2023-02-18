import React from 'react';

export default ({ imgSrc }) => {
  return (
    <React.Fragment>
      <div
        className="swiper-slide"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
    </React.Fragment>
  );
};
