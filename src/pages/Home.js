import React from 'react';
import Template from '../components/common/Template';
import LoginBox from '../components/home/LoginBox';
import NoticeBox from '../components/home/NoticeBox';
import Status from '../components/home/Status';
import { useAuthStore } from '../stores';
import './Home.scss';

const Home = () => {
  const { login, logout } = useAuthStore();
  const handleLoginClick = () => {
    const uname = document.getElementById('uname');
    const upass = document.getElementById('upass');
    const _name = uname.value;
    login(uname.value, upass.value).then(success => {
      if (!success) {
        alert('아이디 혹은 비밀번호가 틀립니다.');
        uname.value = _name;
      }
    });
  };
  return (
    <Template>
      <div className="centerBox">
        <div className="leftBox">
          <LoginBox login={handleLoginClick} logout={logout} />
          <NoticeBox />
          <div className="copy">
            <p>COPYRIGHT© 2021 HLSW Village</p>
          </div>
        </div>
        <div className="rightBox">
          <Status />
        </div>
      </div>
    </Template>
  );
};

export default Home;
