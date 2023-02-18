import React, { useState } from 'react';
import FormInput from '../Utility/FormInput';

export default ({ activeUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <section class="register">
        <div class="fix-center">
          <div class="register-form-wrapper d-flex align-items-center">
            <div class="left-register">
              <div class="heading">
                <h1>Sign In</h1>
              </div>
              <p>
                Welcome back! <br />
                Dear {activeUser}
              </p>

              <div class="follow-us">
                <p>If you aren't following us, It's time! </p>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="right-register">
              <form action="" id="login-with-sb">
                <FormInput
                  id="uname"
                  placeholder="Username"
                  value={username}
                  changeHandler={(val) => setUsername(val)}
                  errorId="uname-info"
                />

                <FormInput
                  id="password"
                  placeholder="Password"
                  value={password}
                  changeHandler={(val) => setPassword(val)}
                  isPassword
                  errorId="password-info"
                />

                <div class="form-group">
                  <input type="submit" value="SUBMIT" id="submit-reg" />
                </div>
                <p>
                  If you are already part of our venture
                  <a href="login.html">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
