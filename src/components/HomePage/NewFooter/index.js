import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './NewFooter.module.css';

const NewFooter = () => {
  const history = useHistory();

  return (
    <footer className={classes.container}>
      <div className={classes.logoContainer}>
        <img
          src="/images/logo.png"
          alt="Shreya Boutique logo"
          className={classes.logo}
        />
        <p className={classes.logoP}>Designed to last A Lifetime</p>

        <div className={classes.paymentOptionsContainer}>
          <img
            className={classes.paymentOptionImage}
            src="/images/visa.jpg"
            alt="We accept VISA"
          />
          <img
            className={classes.paymentOptionImage}
            src="/images/paypal.jpg"
            alt="We accept PayPal"
          />
          <img
            className={classes.paymentOptionImage}
            src="/images/master-card.jpg"
            alt="We accept MasterCard"
          />
        </div>
      </div>

      <div className={classes.section}>
        <span className={classes.sectionTitle}>Contact Us</span>
        <a href="tel:+917483633802" className={classes.sectionLink}>
          +91 7483633802
        </a>
        <a
          href="mailto:shreyaboutique.work@gmail.com"
          className={classes.sectionLink}
        >
          shreyaboutique.work@gmail.com
        </a>
        {/* <a href='/' className={classes.sectionLink}>Bottom</a> */}
        {/* <a href='/' className={classes.sectionLink}>Design Yourself Dashboard</a> */}
      </div>

      <div id="footer-important-links" className={classes.section}>
        {/* <span className={classes.sectionTitle}>Important Links</span> */}
        <a id='about-link-footer' href="/about" className={classes.sectionLink}>
          About Us
        </a>
        {/* <a href="/" className={classes.sectionLink}>
          Terms and Conditions
        </a> */}
      </div>

      <button
        onClick={() => {
          window.scrollTo(0, 0);
          history.push('/auth');
        }}
        id="footer-register-button"
        className={classes.registerButton}
      >
        Register With Us
      </button>
    </footer>
  );
};

export default NewFooter;
