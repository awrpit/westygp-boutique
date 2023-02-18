import React, { useEffect } from 'react';
import LeftSliderMenu from './LeftSliderMenu';
import RightSideContainer from './RightSideContainer';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import classes from './index.module.css';

import Footer from '../Footer';
import { useHistory } from 'react-router-dom';

const items = [
  {
    title: 'Front',
    imgSrc: './images/cart-item.png',
  },
  {
    title: 'Neck',
    imgSrc: './images/cart-item.png',
  },
  {
    title: 'Sleeves',
    imgSrc: './images/cart-item.png',
  },
];

export default () => {
  // const category = useSelector(state => state.dashboard.category)

  const categoryId = useSelector((state) => state.dashboard.categoryId);
  const history = useHistory();

  if (!categoryId) {
    history.push('/');
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
        window.location.replace('/auth');
      }
    });
  });

  return (
    <React.Fragment>
      <div className={classes.topBox}>Design Yourself Dashboard</div>
      <section>
        <div className={`${classes.container}`}>
          <RightSideContainer />
          <LeftSliderMenu items={items} />
          {/* <SelectedPreferences /> */}
        </div>
      </section>
      <Footer showFooter={false} />
    </React.Fragment>
  );
};
