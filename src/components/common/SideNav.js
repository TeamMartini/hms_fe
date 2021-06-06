import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../constants/routes';
import './SideNav.scss';

const SideNav = () => {
  const { pathname } = useLocation();
  const menus = [
    {
      path: Routes.SUGGEST,
      text: '건의 및 문의하기',
    },
    {
      path: Routes.FREE,
      text: '공지사항',
    },
    {
      path: Routes.FAQ,
      text: 'FAQ',
    },
  ];
  return (
    <div className="sideNav">
      <div className="sideNavTitle">
        <h2>커뮤니티</h2>
      </div>
      <div className="sideNavMenu">
        <ul>
          {menus.map(({ path, text }) => <Link key={path} to={path} className={path === pathname ? 'nav-active' : ''}><li>{text}</li></Link>)}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
