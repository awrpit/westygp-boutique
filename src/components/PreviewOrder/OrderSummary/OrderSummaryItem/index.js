import React from 'react';

export default ({ label, cost }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{label} </td>
        <td>:</td>
        <td>Rs. {cost}/-</td>
      </tr>
    </React.Fragment>
  );
};
