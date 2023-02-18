import React, { useEffect, useState } from 'react';
import { blouseData, bottomData, kurtaData } from '../../data/catalog';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductsCarouselItem from './ProductsCarouselItem';

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
    <>
      <section
        style={{
          zIndex: 0,
        }}
        class="section-padding carousel"
      >
        <div class="heading">
          <h1>Kurta</h1>
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
            {kurtaData.map((item) => {
              return (
                <div>
                  <ProductsCarouselItem
                    heading={item.title}
                    description="Place a request order if you liked the design or embroidery. Our team will get back to you with all the details!"
                    imgSrc={item.imgSrc1}
                    viewMoreLink={'/catalog/kurta'}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <section
        style={{
          zIndex: 0,
        }}
        class="section-padding carousel"
      >
        <div class="heading">
          <h1>Bottom</h1>
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
            {bottomData.map((item) => {
              if (item.title === 'Sharara Pants') {
                return null;
              }
              if (item.title === 'Flared Skirts') {
                return null;
              } else {
                return (
                  <div>
                    <ProductsCarouselItem
                      heading={item.title}
                      description="Place a request order if you liked the design or embroidery. Our team will get back to you with all the details!"
                      imgSrc={item.imgSrc1}
                      viewMoreLink={'/catalog/bottom'}
                    />
                  </div>
                );
              }
            })}
          </Carousel>
        </div>
      </section>

      <section
        style={{
          zIndex: 0,
        }}
        class="section-padding carousel"
      >
        <div class="heading">
          <h1>Blouse</h1>
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
            {blouseData.map((item) => {
              return (
                <div>
                  <ProductsCarouselItem
                    heading={item.title}
                    description="Place a request order if you liked the design or embroidery. Our team will get back to you with all the details!"
                    imgSrc={item.imgSrc1}
                    viewMoreLink={'/catalog/blouse'}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};
