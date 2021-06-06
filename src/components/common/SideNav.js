import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.scss';

const SideNav = () => (
  <div className="sideNav">
    <div className="sideNavTitle">
      <h2>커뮤니티</h2>
    </div>
    <div className="sideNavMenu">
      <ul>
        <Link to="/suggest"><li>건의 및 문의하기</li></Link>
        <Link to="/suggest/free"><li>자유게시판</li></Link>
        <Link to="/suggest/faq"><li>FAQ</li></Link>
      </ul>
    </div>
  </div>
);

export default SideNav;
