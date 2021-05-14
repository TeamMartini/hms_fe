import React from 'react';
import './SideNav.scss';

const SideNav = () => (
  <div className="sideNav">
    <div className="sideNavTitle">
      <h2>커뮤니티</h2>
    </div>
    <div className="sideNavMenu">
      <ul>
        <li>자유게시판</li>
        <li>건의/질문</li>
      </ul>
    </div>
  </div>
);

export default SideNav;
