import React from 'react';

import './LoginBox.scss';

const LoginBox = () => (
  <div className="loginBox">
    <h2 className="loginTitle">로그인</h2>
    <div className="inputBox">
      <div className="loginInput">
        <input type="text" id="uname" placeholder="사용자 아이디" />
        <input type="password" id="upass" placeholder="비밀번호" />
      </div>
      <button type="button" className="loginButton">
        로그인
      </button>
    </div>
  </div>
);

export default LoginBox;
