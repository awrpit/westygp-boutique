import React from 'react';
import SwiperSlide from '../../Utility/SwiperSlide';

export default ({ productData }) => {
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="productDetailModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="productDetailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="product-detail">
                <div className="row">
                  {/* <div className='col-lg-4 fix-carousel'>
                    <div className='swiper-container gallery-top'>
                      <div className='swiper-wrapper'>
                        {productData.images.map((image) => (
                          <SwiperSlide imgSrc={image.src} />
                        ))}
                      </div>
                      <div className='swiper-button-next swiper-button-white'></div>
                      <div className='swiper-button-prev swiper-button-white'></div>
                    </div>
                    <div className='swiper-container gallery-thumbs'>
                      <div className='swiper-wrapper'>
                        {productData.images.map((image) => (
                          <SwiperSlide imgSrc={image.src} />
                        ))}
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-8 actual-detail">
                    <h1>{productData.title}</h1>
                    <p>{productData.description}</p>
                    <h3>Rs. {productData.price}/-</h3>

                    <div className="cart-wishlist">
                      <button className="grey-btn">ADD TO WISHLIST</button>
                      <button className="black-btnn">ADD TO CART</button>
                    </div>
                    <div className="more-qns">
                      <h4>MORE QUESTIONS?</h4>
                      <a href="tel:+919099090990">Contact Us 9099090990</a>
                    </div>
                    <div className="more-qns">
                      <h4>CONNECT WITH US ON</h4>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
