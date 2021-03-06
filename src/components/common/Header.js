import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../constants/routes';
import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();
  const menus = [{
    path: Routes.ROOT,
    text: '홈',
  }, {
    path: Routes.INTRO,
    text: '소개',
  }, {
    path: Routes.PLACE,
    text: '공간',
  }, {
    path: Routes.FREE,
    text: '커뮤니티',
  }];
  return (
    <div className="header">
      <Link to={Routes.ROOT}>
        <h1>
          {' '}
          <img className="img-hallym-logo" src="https://user-images.githubusercontent.com/46181173/120957161-21219880-c790-11eb-876e-2969427f728e.png" alt="logo" width="60px" />
          {' '}
          HLSW Village
        </h1>
      </Link>

      <div className="header-menu">
        {menus.map(({ path, text }) => <Link key={path} to={path} className={path === pathname ? 'menu-active' : ''}><div>{text}</div></Link>)}
      </div>
    </div>
  );
};

export default Header;
