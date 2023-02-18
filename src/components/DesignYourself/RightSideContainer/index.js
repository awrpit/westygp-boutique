import React, { useState, useCallback, useEffect } from 'react';
import Preferences from './Preferences';
import SelectedPreferences from './SelectedPreferences';
import { calculateCost, canContinueToCart } from '../../../services/util';

import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import classes from './index.module.css';
import { UPDATE_TOTAL } from '../../../actions/actionTypes';

import firebase, { firestore } from 'firebase';

export default () => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const cost = useSelector((state) => state.dashboard.totalCost);
  const activeId = useSelector((state) => state.dashboard.activeId);
  const activeImgId = useSelector((state) => state.dashboard.activeImgId);

  const storeState = useSelector((state) => state.dashboard);
  const productId = useSelector((state) => state.dashboard.categoryId);
  const prefs = useSelector((state) => state.dashboard.preferences);

  const [canContinue, setCanContinue] = useState(canContinueToCart(storeState));

  useEffect(() => {
    setCanContinue(canContinueToCart(storeState));
  }, [storeState, productId]);

  useEffect(() => {
    dispatch({ type: UPDATE_TOTAL });
  }, [prefs]);

  const showError = () => {
    return toast.error(
      'Please make your selections before proceeding for checkout.'
    );
  };

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

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          {/* <h1>Cost {cost}</h1> */}
          <Preferences id={activeId} />
          {/* <a
            onClick={handleSaveAndContinue}
            href='#'
            className='black-button'
          >
            SAVE & CONTINUE
            <i className='fa fa-chevron-right'></i>
          </a> */}
        </div>
        <div className={classes.rightContainer}>
          <img
            className={classes.showcaseImage}
            src={
              `/dashboard_images/${activeImgId}.png` ||
              `/dashboard_images/${activeImgId}.jpg`
            }
          />
          {/* <h1>{activeImgId}</h1> */}
        </div>
      </div>
    </React.Fragment>
  );
};
