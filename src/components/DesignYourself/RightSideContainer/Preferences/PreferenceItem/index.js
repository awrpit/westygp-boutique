import React, { useState, useCallback, useEffect } from 'react';

import classes from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION, UPDATE_IMG } from '../../../../../actions/actionTypes';

export default ({ title, optionId, isSelected, cost }) => {
  const activeId = useSelector((state) => state.dashboard.activeId);

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);
  const [styleClass, setStyleClass] = useState('');

  useEffect(() => {
    if (isSelected) {
      setSelected(true);
      setStyleClass(classes.selected);
    } else {
      setSelected(false);
      setStyleClass('');
    }
  }, [isSelected]);

  // const toggleSelected = () => {
  //   setSelected((selected) => !selected)
  //   setStyleClass((val) => {
  //     if (val === '') {
  //       return classes.selected
  //     } else {
  //       return ''
  //     }
  //   })
  // }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <div
        onClick={() => {
          // toggleSelected()
          dispatch({ type: SELECT_OPTION, prefId: activeId, optionId });
          dispatch({ type: UPDATE_IMG, id: title });
        }}
        className={`${classes.container} ${styleClass} d-flex justify-content-start align-items-center`}
      >
        <div className="img-option">
          <img
            className={classes.image}
            src={`/dashboard_images/${title}.png`}
            alt=""
          />
        </div>
        <div className="option-name">
          <p>
            {title} - {cost === 0 ? 'Free' : `Rs. ${cost}`}
          </p>
          {isSelected && '✅'}
        </div>
      </div>
      {/* <div style={{ fontSize: '1.2rem', marginLeft: '1.5rem' }}>

        {isSelected && '✅'}
      </div> */}
    </div>
  );
};
