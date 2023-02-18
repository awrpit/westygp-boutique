import React from 'react';

export default ({ heading, description, imgSrc, viewMoreLink }) => {
  return (
    <div
      style={{
        padding: 5,
      }}
      className="item"
    >
      <div className="img-wrapper">
        <img src={imgSrc} alt="" />
        <div
          style={{
            paddingBottom: 30,
          }}
          class="prods-overlay-text"
        >
          <h4 className="text-black">{heading}</h4>
          <a className="white-btn" href={viewMoreLink}>
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
