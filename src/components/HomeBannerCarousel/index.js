import React from 'react';
// import { Carousel } from 'antd';
import Carousel from 'react-multi-carousel';
import './carousel.css';
import CarouselItem from './CarouselItem';

export default () => {
  return (
    <div id="db-carousel">
      <Carousel
        draggable
        infinite
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 1,
          },
          laptop: {
            breakpoint: {
              max: 1440,
              min: 1024,
            },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        // draggable
        // infinite
        // arrows={true}
        autoPlay
        autoPlaySpeed={3000}
        // dots={false}
      >
        <CarouselItem image="/images/banner2.jpg" />
        <CarouselItem image="/images/banner3.jpg" />
        <CarouselItem image="/images/banner1.jpg" />
        {/* <CarouselItem image="/images/banner-image.png" /> */}
      </Carousel>
    </div>
  );
};

export const MobileCarousel = () => {
  return (
    <div id="mb-carousel">
      <Carousel
        draggable
        infinite
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 1,
          },
          laptop: {
            breakpoint: {
              max: 1440,
              min: 1024,
            },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        // draggable
        // infinite
        // arrows={true}
        autoPlay
        autoPlaySpeed={3000}
        // dots={false}
      >
        <CarouselItem image="/images/m_banner3.jpg" />
        <CarouselItem image="/images/m_banner1.jpg" />
        <CarouselItem image="/images/m_banner2.jpg" />
        {/* <CarouselItem image="/images/banner-image.png" /> */}
      </Carousel>
    </div>
  );
};
