import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.scss';

function Sidebar() {
  return (
    <div className="App">
      <div className="sidebar">
        <ul className="nav">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link>Logout</Link></li>
        </ul>
      </div>
      <div className="content">
        <h1>Hello World!</h1>
      </div>
    </div>
    // <nav style={{backgroundColor: 'pink'}}>
    //   <ul>
    //     <li>
    //       <Link to="/dashboard">Dashboard</Link>
    //     </li>
    //     <li>
    //       <Link>Logout</Link>
    //     </li>

    //   </ul>
    // </nav>
  );
}

export default Sidebar;
