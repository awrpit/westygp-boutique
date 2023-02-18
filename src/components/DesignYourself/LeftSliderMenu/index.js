import React, { useState, useEffect } from 'react';

import SliderItem from './SliderItem';

import classes from './index.module.css';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import firebase, { firestore } from 'firebase';
import { canContinueToCart } from '../../../services/util';

export default () => {
  const storeState = useSelector((state) => state.dashboard);
  const [user, setUser] = useState();
  const [canContinue, setCanContinue] = useState(canContinueToCart(storeState));
  const productId = useSelector((state) => state.dashboard.categoryId);
  const items = useSelector((state) => state.dashboard.preferences);

  useEffect(() => {
    setCanContinue(canContinueToCart(storeState));
  }, [storeState, productId]);

  const handleSaveAndContinue = () => {
    if (!canContinue) {
      return showError();
    } else {
      // Complete selectiond data, you can see the format by console logging.
      const data = { ...storeState };
      const db = firebase.firestore();

      console.log(data);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          db.collection('users')
            .doc(user.uid)
            .update({
              cart: data,
              cost: data.totalCost,
            })
            .then(() => {
              window.location.replace('/measure');
            });
        } else {
          console.log('No user!');
        }
      });
    }
  };

  const showError = () => {
    return toast.error(
      'Please make your selections before proceeding for checkout.'
    );
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.container}>
        {items.map((item) => (
          <SliderItem
            title={item.type}
            id={item.id}
            isLocked={item.locked}
            imgSrc={`/dashboard_images/${item.options[0].title}.png`}
          />
        ))}
        <a
          onClick={handleSaveAndContinue}
          href="#"
          style={{
            backgroundColor: 'black',
            borderRadius: '7px',
            padding: '1rem',
            color: 'white',
            height: '40%',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            margin: '1rem',
          }}
        >
          SAVE & CONTINUE &nbsp;&nbsp;
          <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </React.Fragment>
  );
};
