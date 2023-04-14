import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils';
import '../css/login.scss';

function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (key, value) => setLoginData({...loginData, [key]: value})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = loginData;
    const errors = [];

    // Validate email
    if (validateEmail(email)) errors.push('Please check Email');
    
    // Validate password
    if (validatePassword(password)) errors.push('Please check Password and length should be 6 or more');

    // Display errors, or submit form
    if (errors.length) setFormErrors(errors);
    else {
      // Submit form
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      if(errors.length > 0) setFormErrors(errors);
      else navigate('/dashboard');
    }
  };
  
  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
    <h2 className="login-form__title">Login</h2>
      {formErrors.length > 0 && (
        <div className="alert alert-danger" role="alert">
          <ul>
            {formErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          // className="form-control"
          className="login-form__input"
          id="email"
          value={loginData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          // className="form-control"
          className="login-form__input"
          id="password"
          value={loginData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>
      <button type="submit" 
      // className="btn btn-primary" 
      className="login-form__button">
        Sign In
      </button>
    </form>
    </div>
  );
}

export default LoginForm;

