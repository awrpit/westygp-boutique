import React from 'react';

const FlexContainer = ({ children, direction = 'row', gap = 6 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: direction, gap }}>
      {children}
    </div>
  );
};

export default FlexContainer;
