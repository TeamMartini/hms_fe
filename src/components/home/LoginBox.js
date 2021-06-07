import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAuthStore } from '../../stores';

import './LoginBox.scss';

const LoginBox = observer(() => {
  const { login, username } = useAuthStore();

  const handleLoginClick = () => {
    const uname = document.getElementById('uname').value;
    const upass = document.getElementById('upass').value;
    login(uname, upass);
  };

  const LoginNedded = () => (
    <div>
      <h2 className="loginTitle">로그인</h2>
      <div className="inputBox">
        <div className="loginInput">
          <input type="text" id="uname" placeholder="사용자 아이디" />
          <input type="password" id="upass" placeholder="비밀번호" />
        </div>
        <button type="button" className="loginButton" onClick={handleLoginClick}>
          로그인
        </button>
      </div>
    </div>
  );

  return (
    <div className="loginBox">
      {username
        ? (
          <div>
            <p>
              안녕하세요
              {' '}
              {username}
              {' '}
              님
            </p>
          </div>
        )
        : <LoginNedded />}
    </div>
  );
});

export default LoginBox;
