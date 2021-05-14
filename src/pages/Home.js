import React from 'react';
import Template from '../components/common/Template';
import LoginBox from '../components/home/LoginBox';
import NoticeBox from '../components/home/NoticeBox';
import VillageBox from '../components/home/VillageBox';
import './Home.scss';

const Home = () => (
  <Template>
    <div className="centerBox">
      <div className="leftBox">
        <VillageBox />
      </div>
      <div className="rightBox">
        <LoginBox />
        <NoticeBox />
      </div>
    </div>
  </Template>
);

export default Home;
