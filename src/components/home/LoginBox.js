import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../constants/routes';
import { useAuthStore } from '../../stores';
import api from '../../utils/api';

import './LoginBox.scss';

async function fetchRentalList(lender) {
  const result = await api.get(Routes.API.RESERVE_LIST, {
    lender,
  });
  return result;
}

const LoginBox = observer(({ login, logout }) => {
  const {
    name, username,
  } = useAuthStore();
  const timeTables = [
    '09:00 ~ 10:00',
    '10:00 ~ 11:00',
    '11:00 ~ 12:00',
    '12:00 ~ 13:00',
    '13:00 ~ 14:00',
    '14:00 ~ 15:00',
    '15:00 ~ 16:00',
    '16:00 ~ 17:00',
    '17:00 ~ 18:00'];
  const rooms = ['대강의실', '스튜디오', '회의실', '실습실', '멘토링실1', '멘토링실2', '멘토링실3', '멘토링실4'];

  const [rentals, setRentals] = useState([]);
  const _fetchRentalList = useCallback(_username => {
    fetchRentalList(_username).then(({ code, message, rental }) => {
      if (code === 200 && !message) {
        setRentals(rental);
      } else {
        alert(message);
      }
    });
  }, []);
  useEffect(() => {
    _fetchRentalList(username);
  }, [_fetchRentalList, username]);

  const getRentalTime = _time => {
    const _times = _time.split(',').sort();
    return `${timeTables[_times[0]].split(' ~ ')[0]} ~ ${timeTables[_times[_times.length - 1]].split(' ~ ')[1]}`;
  };

  const handleKeyPress = useCallback(e => {
    if (e.key === 'Enter') {
      login();
    }
  }, [login]);

  const LoginNedded = () => (
    <div className={username ? 'hidden' : ''}>
      <h2 className="loginTitle">로그인</h2>
      <div className="inputBox">
        <div className="loginInput">
          <input type="text" id="uname" placeholder="사용자 아이디" onKeyPress={handleKeyPress} />
          <input type="password" id="upass" placeholder="비밀번호" onKeyPress={handleKeyPress} />
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
          <p>

            {' '}
            <span style={{ fontWeight: 'bold' }}>{name}</span>
            {' '}
            님
          </p>
          <button className="logout-button" type="button" onClick={logout}>로그아웃</button>
        </div>
        <div className="loggedin-place">
          <p>대여현황</p>
          <Link to={Routes.PLACE}>
            <div className="place-status">
              {rentals.length === 0 ? <p>대여 내역이 없습니다.</p> : rentals.map(({
                _id, roomNumber: num, date: rdate, rentalTime,
              }) => (
                <div
                  key={_id}
                >
                  <div>
                    <p>{moment(rdate, 'YYMMDD').format('MM/DD')}</p>
                    <p>{rooms[num]}</p>
                    <p>{getRentalTime(rentalTime)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
      <LoginNedded />
    </div>
  );
});

export default LoginBox;
