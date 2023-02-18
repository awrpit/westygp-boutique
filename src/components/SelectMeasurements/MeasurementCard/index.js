import React from 'react';

export default ({ title, description, imgSrc }) => {
  return (
    <React.Fragment>
      <div className="measurement-option">
        <h3>{title}</h3>
        <div className="options-img">
          <img src={imgSrc} alt="" />
        </div>
        <p>{description}</p>
        <a href="#" className="black-btn">
          SELECT
        </a>
      </div>
    </React.Fragment>
  );
};
