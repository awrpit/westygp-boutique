import React from 'react';

export default ({ cartItemCount }) => {
  return (
    <div className="protect-top-nav">
      <div className="top-nav">
        <div className="fix-center">
          <div className="top-nav-left col-lg-4">
            <a href="#">
              <i className="fa fa-whatsapp"></i>Whatsapp
            </a>
            <a href="mailto: shreyaboutique1@gmail.com ?">
              <i className="fa fa-envelope-o"></i>contact@sboutique.com
            </a>
          </div>
          <div
            style={{
              zIndex: 1000,
            }}
            className="logo col-lg-4"
          >
            <a href="/">
              <img src="./images/logo.png" alt="" />
            </a>
          </div>
          <div
            style={{
              zIndex: 1000,
            }}
            className="top-nav-right col-lg-4"
          >
            <a href="/about">About Us</a>
            <a href="/user" className="add-line">
              <i className="fa fa-user"></i>
            </a>
            <a href="/cart" className="">
              <i className="fa fa-shopping-cart"></i>
            </a>
            {/* <span className="cart-item-num"></span> */}
            {/* <a href="#" className="add-line"><i className="fa fa-heart-o"></i></a> */}
            {/* <span className="click-search"><i className="fa fa-search"></i></span> */}
            {/* <div className="search-input">
                            <form action="" method="post" className="search">
                                <div className="form-group">
                                    <input type="text" name="search" id="search" placeholder="Type in product" />

                                </div>
                            </form>
                        </div> */}
          </div>
        </div>
      </div>
      <i className="fa fa-chevron-down"></i>
    </div>
  );
};
