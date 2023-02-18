import React, { useState, useEffect } from 'react';

import classes from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  SET_ACTIVE_PREFERENCE,
  UPDATE_IMG,
} from '../../../../actions/actionTypes';

export default ({ title, imgSrc, id, isLocked }) => {
  const dispatch = useDispatch();

  const isActive = useSelector((state) => state.dashboard.activeId === id);

  const [styleClass, setStyleClass] = useState(
    isActive ? classes.selected : ''
  );

  useEffect(() => {
    if (isActive) {
      setStyleClass(classes.selected);
    } else {
      setStyleClass('');
    }
  }, [isActive]);

  const selectItem = () => {
    dispatch({ type: SET_ACTIVE_PREFERENCE, id });
    dispatch({ type: UPDATE_IMG, id: 'placeholder2' });
  };

  const lockedClass = isLocked ? classes.locked : null;

  return (
    <React.Fragment>
      <div
        onClick={() => {
          if (!isLocked) {
            return selectItem();
          } else {
            return;
          }
        }}
        className={`${classes.container} ${styleClass} ${lockedClass}`}
      >
        <img className={classes.image} src={imgSrc} alt={title} />
        <p className={classes.text}>{title}</p>
      </div>
    </React.Fragment>
  );
};
