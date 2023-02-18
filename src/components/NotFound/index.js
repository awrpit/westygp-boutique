import React from 'react';

export default () => {
  return (
    <React.Fragment>
      {/* <!-- 404 error section --> */}
      <section id="error-main">
        <div class="fix-center">
          <div class="row">
            <div class="col-lg-6">
              <img src="./images/404-error.png" alt="" />
            </div>
            <div class="col-lg-6 absolute-section">
              <h1>Oops!</h1>
              <h5>We can't seem to find the page you're looking for.</h5>
              <div class="check-prods">
                <h3>Check our products!</h3>
                <a href="#">Kurtas</a>
                <a href="#">Bottom</a>
                <a href="#">Semi-stitched</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 404 error section --> */}

      <div class="clr"></div>
    </React.Fragment>
  );
};
