import React from 'react';

export default ({ label, href, isActive = false }) => {
  return (
    <a href={href} className={isActive ? 'active' : ''}>
      {label}
    </a>
  );
};
