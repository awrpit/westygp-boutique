import React from 'react';
import Option from './Option';

export default () => {
  return (
    <div className="measurement-selection">
      <h2 className="w-100 text-center mb-4">
        Please select how you want your dress to be measured!
      </h2>

      <Option
        title="Measure yourself"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum."
        imgSrc="./images/measuring-tape.png"
        dataTarget="measureModal"
      />

      <Option
        title="Copy from measurement garment"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum."
        imgSrc="./images/copy.png"
        dataTarget="copyModal"
      />
    </div>
  );
};
