import React from 'react';

export default ({ imgSrc, title, description, dataTarget }) => {
  return (
    <div className="item-measure">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="item-measure-img">
        <img src={imgSrc} alt="" />
      </div>
      <a
        className="black-btn mb-4"
        data-toggle="modal"
        data-target={`#${dataTarget}`}
      >
        SELECT
      </a>
    </div>
  );
};
