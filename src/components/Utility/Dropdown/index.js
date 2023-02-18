import React from 'react';

export default ({
  id,
  options,
  placeholder,
  value,
  changeHandler,
  isForm = true,
}) => {
  const innerCode = (
    <select
      value={value}
      onChange={(e) => changeHandler(e.target.value)}
      name={id}
      id={id}
    >
      <option value="">{placeholder}</option>
      {options.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );

  if (isForm) {
    return (
      <React.Fragment>
        <div className="form-group">{innerCode}</div>
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{innerCode}</React.Fragment>;
  }
};
