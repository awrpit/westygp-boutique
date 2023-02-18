import React, { useCallback, useState, useEffect } from 'react';

import classes from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_PREFERENCE } from '../../../../../actions/actionTypes';

export default ({ title, selection, id, isLocked }) => {
  const dispatch = useDispatch();

  const prefs = useSelector((state) => state.dashboard.preferences);

  const [selectedTitle, setSelectedTitle] = useState('');

  const getTitleFromId = useCallback(() => {
    for (let pref of prefs) {
      if (pref.id === id) {
        for (let option of pref.options) {
          if (option.id === selection) {
            return option.title;
          }
        }
      }
    }
  }, [selection, id]);

  useEffect(() => {
    setSelectedTitle(getTitleFromId());
  }, [getTitleFromId]);

  const lockedClass = isLocked ? classes.locked : null;

  return (
    <React.Fragment>
      <div
        className={`${classes.container} ${lockedClass} border-item d-flex justify-content-start align-items-center`}
      >
        <div className="img-option">
          <img className={classes.image} src="./images/cart-item.png" alt="" />
        </div>
        <div className="option-name">
          <p>
            <b>{title} : </b>
            {selectedTitle}
          </p>
        </div>
        {!isLocked ? (
          <i
            onClick={() => dispatch({ type: REMOVE_PREFERENCE, id })}
            className={`${classes.closeIcon} fa fa-close`}
          ></i>
        ) : null}
        {/* TODO */}
        {/* {isLocked ? (
          <div>
            <p>
              You cannot remove or change this preference as it is a part of the
              preset you selected.
            </p>
          </div>
        ) : null} */}
      </div>
    </React.Fragment>
  );
};
