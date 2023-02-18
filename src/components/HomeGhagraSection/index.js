import React, { useEffect, useState } from 'react';

import GhagraItem from './GhagraItem';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default () => {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAutoPlay(true);
    }, 4000);
  });

  return (
    <section
      style={{
        zIndex: 0,
      }}
      class="section-padding grey-bg carousel"
    >
      <div class="heading">
        <h1>Buy Now or Design Yourself</h1>
      </div>
      <div class="fix-center">
        <Carousel
          autoPlay={autoPlay}
          autoPlaySpeed={2000}
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          draggable={false}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl={false}
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
        >
          <div>
            <GhagraItem
              heading={'Blouse'}
              shopLink="/catalog/blouse"
              imgSrc={'./images/ghagra2.jpg'}
              description="Some product descriptionmj"
              categoryId={1000}
            />
          </div>
          <div>
            <GhagraItem
              heading={'Kurta'}
              shopLink={'/catalog/kurta'}
              imgSrc={'./images/ghagra2.jpg'}
              description="Some product descriptionmj"
              categoryId={1001}
            />
          </div>
          <div>
            <GhagraItem
              heading={'Bottom'}
              shopLink={'/catalog/bottom'}
              imgSrc={
                'https://firebasestorage.googleapis.com/v0/b/westygo-12bdc.appspot.com/o/bottom%2FChuridar%20Bottoms.jpg?alt=media&token=0480ed5e-f316-4edd-af0d-66203fcca703'
              }
              description="Some product descriptionmj"
              categoryId={1002}
            />
          </div>
          {/* <div>
            <GhagraItem
              heading={'Salwar'}
              shopLink={'/catalog/salwar'}
              imgSrc={'./images/ghagra2.jpg'}
              description='Some product descriptionmj'
              categoryId={1003}
            />
          </div> */}
        </Carousel>
      </div>
    </section>
  );
};
