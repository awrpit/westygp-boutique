import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PreferenceItem from './PreferenceItem';

import classes from './index.module.css';

export default ({ id }) => {
  const prefs = useSelector((state) => state.dashboard.preferences);

  const [activeTitle, setActiveTitle] = useState();
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const getSelectedValue = useCallback(() => {
    for (let item of prefs) {
      if (item.id === id) {
        return item.value;
      }
    }
  }, [id, prefs]);

  const getActiveTitle = useCallback(() => {
    for (let item of prefs) {
      if (item.id === id) {
        return item.type;
      }
    }
  }, [id, prefs]);

  const getItemsFromId = useCallback(() => {
    let res = [];

    for (let pref of prefs) {
      if (pref.id === id) {
        for (let option of pref.options) {
          res.push(option);
        }
      }
    }

    return res;
  }, [id, prefs]);

  useEffect(() => {
    setActiveTitle(getActiveTitle());
    setItems(getItemsFromId());
    setSelectedValue(getSelectedValue());
  }, [getActiveTitle, getItemsFromId, getSelectedValue]);

  const activeId = useSelector((state) => state.dashboard.activeId);

  if (!activeId) return null;

  return (
    <React.Fragment>
      <h3 className={classes.headingContainer}>
        {activeTitle}
        {/* <i className='fa fa-close'></i>{' '} */}
      </h3>
      <img src="up.png" alt="Scroll up" className={classes.icon} />
      <div className={`${classes.container} selected-option-items`}>
        {items.map((item) => (
          <PreferenceItem
            cost={item.cost}
            title={item.title}
            optionId={item.id}
            isSelected={item.id === selectedValue}
          />
        ))}
        {/* <PreferenceItem title='Lining 1' imgSrc='./images/cart-item.png' />
            <PreferenceItem title='Lining 2' imgSrc='./images/cart-item.png' /> */}
      </div>
      <img src="down.png" alt="Scroll up" className={classes.icon} />
    </React.Fragment>
  );
};
