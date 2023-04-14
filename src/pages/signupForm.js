import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validateName, validatePassword, validateProfileImage } from '../utils';
import { useDispatch, useSelector } from 'react-redux'
import { addUserData } from '../reducers/userSlice'

function SignupForm() {
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.root.users);
  console.log('==================', apiData)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  })
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (key, value) => setUser({ ...user, [key]: value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, profileImage } = user;
    const errors = [];

    // Validate name
    if (validateName(name)) errors.push('Please check Name');

    // Validate email
    if (validateEmail(email)) errors.push('Please check Email');

    // Validate password
    if (validatePassword(password)) errors.push('Please check Password and length should be 6 or more');

    // Validate confirm password
    if (validatePassword(confirmPassword)) errors.push('Please check Password, length should be 6 or more and password and confirm password should be equal');

    // Validate profile image
    if (validateProfileImage(profileImage)) errors.push('Profile image must be a JPEG or PNG file');

    // Display errors, or submit form
    if (errors?.length) setFormErrors(errors);
    else {
      try {
        dispatch(addUserData(JSON.stringify(user)))
        // if (response.ok) {
        //   setFormErrors([])
        //   navigate('/login');
        // }
        // else setFormErrors(data.errors);
      } catch(err) {
        console.log('Error - ', err)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formErrors?.length > 0 && (
        <div className="alert alert-danger" role="alert">
          <ul>
            {formErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={user.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={user.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={user.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirm-password"
          value={user.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profile-image">Profile Image</label>
        <input
          type="file"
          accept="image/jpeg,image/png"
          className="form-control-file"
          id="profile-image"
          onChange={(e) => handleChange('profileImage', e.target.files[0])}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;

