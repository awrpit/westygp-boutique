import React from 'react';

export default ({
  id,
  label,
  placeholder,
  value = '',
  changeHandler,
  isModal = false,
  errorId,
  isPassword = false,
}) => {
  let classes = isModal ? 'form-group half-in' : 'form-group';

  return (
    <React.Fragment>
      <div className={classes}>
        {isModal ? <label htmlFor={id}>{label}</label> : null}
        <input
          type={isPassword ? 'password' : 'text'}
          name={id}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
        {errorId ? <span id={errorId} className="error"></span> : null}
      </div>
    </React.Fragment>
  );
};
