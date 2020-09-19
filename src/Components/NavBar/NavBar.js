import React from 'react';
import {Link} from 'react-router-dom';
// import './style.scss';

const NavBar = () => (
  <div className="navBar">
  <Link to="/">
    Coming
  </Link>
  <Link to="/thanks">
    Thanks
  </Link>
  </div>
);

export default NavBar;
