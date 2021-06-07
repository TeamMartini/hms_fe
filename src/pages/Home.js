import React from 'react';
import Template from '../components/common/Template';
import LoginBox from '../components/home/LoginBox';
import NoticeBox from '../components/home/NoticeBox';
import VillageBox from '../components/home/VillageBox';
import { useAuthStore } from '../stores';
import './Home.scss';

const Home = () => {
  const { login, logout } = useAuthStore();
  const handleLoginClick = () => {
    const uname = document.getElementById('uname').value;
    const upass = document.getElementById('upass').value;
    login(uname, upass);
  };
  return (
    <Template>
      <div className="centerBox">
        <div className="leftBox">
          <LoginBox login={handleLoginClick} logout={logout} />
          <NoticeBox />
        </div>
        <div className="rightBox">
          <VillageBox />
        </div>
      </div>
    </Template>
  );
};

export default Home;
