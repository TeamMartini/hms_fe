import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAuthStore } from '../../stores';

import './LoginBox.scss';

const LoginBox = observer(({ login, logout }) => {
  const {
    name, username,
  } = useAuthStore();

  const LoginNedded = () => (
    <div className={username ? 'hidden' : ''}>
      <h2 className="loginTitle">로그인</h2>
      <div className="inputBox">
        <div className="loginInput">
          <input type="text" id="uname" placeholder="사용자 아이디" />
          <input type="password" id="upass" placeholder="비밀번호" />
        </div>
        <button type="button" className="loginButton" onClick={login}>
          로그인
        </button>
      </div>
    </div>
  );

  return (
    <div className="loginBox">
      <div className={username ? 'loggedin' : 'hidden'}>
        <div className="loggedin-user">
          <p style={{ color: '#222' }}>
            안녕하세요
            {' '}
            <span style={{ fontWeight: 'bold' }}>{name}</span>
            {' '}
            님
          </p>
          <button className="logout-button" type="button" onClick={logout}>로그아웃</button>
        </div>
        <div className="loggedin-place">
          <p>대여현황</p>
          <div className="place-status">
            <p>대여 내역이 없습니다.</p>
          </div>
        </div>
      </div>
      <LoginNedded />
    </div>
  );
});

export default LoginBox;
