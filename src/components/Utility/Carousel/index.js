import React, { useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default ({
  children,
  autoplay = false,
  showThumbs = false,
  className = '',
  id,
  responsive,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnDragStart = (e) => e.preventDefault();

  const slideNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const slidePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleSlideChanged = (e) => {
    setCurrentIndex(e.item);
  };

  return (
    <>
      <AliceCarousel
        dotsDisabled
        onSlideChanged={handleSlideChanged}
        slideToIndex={currentIndex}
        buttonsDisabled
        autoHeight
        responsive={responsive}
      >
        {children}
      </AliceCarousel>
      <div
        className="arrows"
        style={{
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        <AiOutlineArrowLeft
          style={{
            marginRight: 50,
          }}
          size="30"
          onClick={() => slidePrev()}
        />
        <AiOutlineArrowRight
          style={{
            marginRight: 50,
          }}
          size="30"
          onClick={() => slideNext()}
        />
      </div>
    </>
  );
};
