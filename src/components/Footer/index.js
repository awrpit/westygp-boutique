import React from 'react';

export default ({ showFooter = true }) => {
  return (
    <React.Fragment>
      {/* Footer */}
      {showFooter && (
        <footer class="section-padding">
          <div class="fix-center">
            <div class="row">
              <div class="add-space-tab col-lg-5">
                <div class="img-f-wrapper">
                  <a href="index.html">
                    <img src="./images/logo.png" alt="" />
                  </a>
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, tempora.Lorem ipsum dolor sit amet
                </span>
              </div>
              <div class="add-space-tab col-lg-3">
                <h4>CONTACT US</h4>
                <a href="tel:+91 9989655322">
                  <i class="fa fa-phone"></i>
                  +91 9989655322
                </a>
                <a href="mailto:contact@sboutique.com">
                  <i class="fa fa-envelope"></i>
                  contact@sboutique.com
                </a>
                <div class="social-connect">
                  <a href="">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-3">
                <h4>IMPORTANT LINKS</h4>
                <a href="about.html">About Us</a>
                <a href="">Terms and Conditions</a>
                <a href="#" class="black-btn">
                  REGISTER WITH US
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}

      <div class="black-bg copyright" style={{ height: '10rem' }}>
        <div class="fix-center">
          <span>
            We accept :
            <img src="./images/visa.jpg" alt="" />
            <img src="./images/master-card.jpg" alt="" />
            <img src="./images/paypal.jpg" alt="" />
          </span>
          <p>All rights reserved &copy; Shreya Boutique 2020</p>
        </div>
      </div>
    </React.Fragment>
  );
};
