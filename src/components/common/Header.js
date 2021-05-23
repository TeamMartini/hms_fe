import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../constants/routes';
import './Header.scss';

const Header = () => (
  <div className="header">
    <Link to={Routes.ROOT}><h1>HLSW Village</h1></Link>
    <div className="header-menu">
      <Link to={Routes.ROOT}><div>홈</div></Link>
      <Link to={Routes.ROOT}><div>소개</div></Link>
      <Link to={Routes.ROOT}><div>공간</div></Link>
      <Link to={Routes.SUGGEST}><div>커뮤니티</div></Link>
    </div>
  </div>
);

export default Header;
