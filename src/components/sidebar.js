import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.scss';
import { useSelector } from "react-redux";

function Sidebar() {
  const loggedInUser = useSelector(state => state.loggedInUser);
  console.log('====sidebar====', loggedInUser)
  return (
    <div className="App">
      <div className="sidebar">
        {Object.keys(loggedInUser).length > 0 &&  <div className="user-section">
          <img src={loggedInUser.profileImage} alt={'Image'} />
          <h3>{loggedInUser.name}</h3>
          <p>{loggedInUser.email}</p>
        </div> || <></>}

        <ul className="nav">
          <li><Link to="/dashboard">Home</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
