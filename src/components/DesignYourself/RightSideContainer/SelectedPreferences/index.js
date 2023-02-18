import React from 'react';
import SelectedItem from './SelectedItem';

import classes from './index.module.css';
import { useSelector } from 'react-redux';

export default () => {
  const preferences = useSelector((state) => state.dashboard.preferences);

  return (
    <React.Fragment>
      <div className={`${classes.container} selected-options`}>
        <h4 className={classes.headingContainer}>Selected Options</h4>

        {preferences.map((item) => (
          <SelectedItem
            title={item.type}
            selection={item.value}
            key={item.id}
            id={item.id}
            isLocked={item.locked}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
