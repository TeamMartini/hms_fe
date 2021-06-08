/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  forwardRef, useCallback, useEffect, useState,
} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Template from '../components/common/Template';
import './Place.scss';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../utils/api';
import Routes from '../constants/routes';
import { useAuthStore } from '../stores';

async function fetchRentalList(lender) {
  const result = await api.get(Routes.API.RESERVE_LIST, {
    lender,
  });
  return result;
}

const Place = () => {
  const [conn, setConn] = useState(false);
  const { username, name } = useAuthStore();
  const upper = [1054, 558];
  const upperCoords = [
    0, 232, 8, 506, 163,
    1, 393, 343, 481, 407,
    2, 393, 411, 482, 466,
    3, 484, 343, 718, 466,
  ];
  const under = [1055, 620];
  const underCoords = [
    0, 469, 14, 565, 142,
    1, 568, 14, 663, 96,
    2, 667, 12, 765, 97,
    3, 768, 14, 843, 142,
  ];
  const iter = [0, 1, 2, 3];
  const [upCoord, setUpCoord] = useState(upperCoords);
  const [udCoord, setUdCoord] = useState(underCoords);
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState(false);

  const [date, setDate] = useState(new Date());
  registerLocale('ko', ko);

  const rooms = ['대강의실', '스튜디오', '회의실', '실습실', '멘토링실1', '멘토링실2', '멘토링실3', '멘토링실4'];

  const handleDateChange = useCallback(_date => {
    setDate(_date);
  }, [setDate]);

  const [times, setTimes] = useState([]);
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

  const getRentalTime = _time => {
    const _times = _time.split(',').sort();
    return `${timeTables[_times[0]].split(' ~ ')[0]} ~ ${timeTables[_times[_times.length - 1]].split(' ~ ')[1]}`;
  };

  // selected chagne = > room changed _date => date changed
  const [rented, setRented] = useState([]);

  const getTimeClass = useCallback(i => {
    if (times.indexOf(`t${i}`) !== -1) {
      return 'time-active';
    }
    return rented.indexOf(i) !== -1 ? 'time-disable' : '';
  }, [rented, times]);

  useEffect(() => {
    async function fetchReservations() {
      if (selected === -1) return;
      setTimes([]);
      const result = await api.get(Routes.API.RESERVE_ALREADY, {
        date: moment(date).format('YYMMDD'),
        roomNumber: selected,
      });
      if (result.code === 200) {
        const _rented = [];
        result.rental.forEach(({ rentalTime }) => _rented.push(...rentalTime.split(',')));
        setRented(_rented.map(e => parseInt(e, 10)));
      } else {
        alert('날짜 정보를 가져오는데 실패하였습니다.');
      }
    }
    fetchReservations();
  }, [date, selected]);

  const handleResize = useCallback(() => {
    let w1 = 0;
    let w2 = 0;
    if (document.querySelector('.place01')) {
      w1 = document.querySelector('.place01').width;
      w2 = document.querySelector('.place02').width;
    }
    const r1 = w1 / upper[0];
    const r2 = w2 / under[0];
    const upc = upperCoords.map(c => c * r1);
    const udc = underCoords.map(c => c * r2);
    setUpCoord(upc);
    setUdCoord(udc);
    setSize(true);
  }, [under, underCoords, upper, upperCoords]);

  const handleTimeClick = useCallback(function _() {
    const _time = `t${this}`;
    if (rented.indexOf(this) === -1) {
      if (times.indexOf(_time) !== -1) {
        const filtered = times.filter(time => time !== _time);
        const nums = filtered.map(e => parseInt(e.substr(1), 10));
        let remove = false;
        for (let i = 0; i < nums.length - 1; i += 1) {
          if (nums[i + 1] - nums[i] > 1) {
            remove = i + 1;
            break;
          }
        }
        if (remove) {
          filtered.splice(remove, filtered.length - remove);
        }
        setTimes(filtered);
      } else {
        if (times.length > 2) {
          // 3시간 이상 불가
          alert('3시간 이상 선택할 수 없습니다');
          return;
        }
        const nums = times.map(e => parseInt(e.substr(1), 10));
        nums.push(this);
        nums.sort();
        for (let i = 0; i < nums.length - 1; i += 1) {
          if (nums[i + 1] - nums[i] > 1) {
            // 시간 스킵 불가
            alert('연속된 시간만 선택이 가능합니다.');
            return;
          }
        }
        setTimes([...times, _time].sort());
      }
    }
  }, [rented, times]);

  useEffect(() => {
    window.onload = handleResize;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

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
  const handleClick = function _(i) {
    return () => {
      setSelected(i);
    };
  };

  const handleRentalClick = () => {
    if (conn) return;

    async function postRental() {
      if (times.length > 0) {
        // rent
        setConn(true);
        const { code, message } = await api.post(Routes.API.RESERVE_ADD, {
          date: moment(date).format('YYMMDD'),
          lender: username,
          rentalTime: times.map(e => parseInt(e.substr(1), 10)).join(','),
          roomNumber: selected,
          capacity: 0,
        });
        if (code === 200) {
          alert(message);
          const _selected = selected + 0;
          setSelected(-1);
          setSelected(_selected);
        } else {
          alert(message || '네트워크 에러가 발생했습니다.');
        }
        _fetchRentalList(username);
        setConn(false);
      }
    }
    postRental();
  };

  const handleRemoveClick = (_date, _roomNumber, _lender, _rentalTime) => async () => {
    const { code, result } = await api.post(Routes.API.RESERVE_REMOVE, {
      date: _date,
      roomNumber: _roomNumber,
      lender: _lender,
      rentalTime: _rentalTime,
    });
    console.log(result);
    if (code === 200) {
      if (!result.message && result.ok === 1) {
        alert('대여가 취소되었습니다.');
        _fetchRentalList(_lender);
        const _selected = selected + 0;
        setSelected(-1);
        setSelected(_selected);
      } else {
        alert(result.message);
      }
    } else {
      alert('네트워크 에러가 발생했습니다');
    }
  };

  const DateButton = forwardRef(({ value, onClick }, ref) => (
    <button
      ref={ref}
      type="button"
      className="rnd-btn"
      onClick={onClick}
    >
      {value}
    </button>
  ));

  if (!name) {
    return (
      <Template>
        <Container className="centerBox">
          <div className="place-wrap">
            <div className="need-login">
              <p>로그인이 필요한 서비스입니다.</p>
              <Link to={Routes.ROOT} className="rnd-btn">로그인</Link>
            </div>
          </div>
        </Container>
      </Template>
    );
  }

  return (
    <Template>
      <Container className="centerBox">
        <div className="place-wrap">
          <div className="place-map">
            <div className="place-img">
              <div>
                <img
                  name="upper-img"
                  className="place01"
                  src="./images/upper.png"
                  alt="place01"
                />
                <div className="map" id="upper-img" name="upper-img">
                  {!size && setTimeout(handleResize, 100) && ''}
                  {iter.map(i => {
                    const [key, ...coords] = upCoord.slice(i * 5, (i + 1) * 5);
                    const style = { left: `${coords[0]}px`, top: `${coords[1]}px` };
                    style.width = `${coords[2] - coords[0]}px`;
                    style.height = `${coords[3] - coords[1]}px`;
                    const classNames = ['image-map'];
                    if (selected === i) {
                      classNames.push('on');
                    }
                    return (
                      <button
                        onClick={handleClick(i)}
                        type="button"
                        className={classNames.join(' ')}
                        key={key}
                        style={style}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <img
                  name="under-img"
                  className="place01 place02"
                  src="./images/under.png"
                  alt="palce02"
                />
                <map id="under-img" name="under-img">
                  {iter.map(i => {
                    const [key, ...coords] = udCoord.slice(i * 5, (i + 1) * 5);
                    const style = { left: `${coords[0]}px`, top: `${coords[1]}px` };
                    style.width = `${coords[2] - coords[0]}px`;
                    style.height = `${coords[3] - coords[1]}px`;
                    const classNames = ['image-map'];
                    if (selected === i + 4) {
                      classNames.push('on');
                    }
                    return (
                      <button
                        onClick={handleClick(i + 4)}
                        type="button"
                        className={classNames.join(' ')}
                        key={key}
                        style={style}
                      />
                    );
                  })}
                </map>
              </div>
            </div>
          </div>
          <div className="place-time">
            <div className="time-title">
              <h2>{rooms[selected]}</h2>
              <p className={times.length > 0 ? 'on' : ''} onClick={handleRentalClick}>대여</p>
            </div>
            <div className="time-wrap">
              <div className="time-date">
                <p>이용시간</p>
                <DatePicker
                  customInput={<DateButton />}
                  locale="ko"
                  dateFormat="yyyy.MM.dd"
                  minDate={new Date()}
                  selected={date}
                  onChange={handleDateChange}
                />
              </div>
              <div className="time-table">
                {timeTables.map((_time, i) => (
                  <li
                    className={getTimeClass(i)}
                    onClick={handleTimeClick.bind(i)}
                    key={_time}
                  >
                    {_time}
                  </li>
                ))}
              </div>
              <p className="time-alert">* 최대 이용시간은 3시간 입니다.</p>
            </div>
          </div>
          <div className="place-info">
            <div className="place-user">
              <p>
                <span>{name}</span>
                {' '}
                님
              </p>
              <div className="place-history">
                {rentals.length === 0 ? <p>대여 내역이 없습니다.</p> : rentals.map(({
                  _id, roomNumber: num, date: rdate, rentalTime, lender,
                }) => (
                  <div
                    key={_id}
                  >
                    <div>
                      <p>{moment(rdate, 'YYMMDD').format('MM/DD')}</p>
                      <p>{rooms[num]}</p>
                      <p>{getRentalTime(rentalTime)}</p>
                    </div>
                    <p onClick={handleRemoveClick(rdate, num, lender, rentalTime)}>x</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="place-notice">
              <p>
                <span>준수 사항</span>
              </p>
              <div className="place-content">
                <p>1. 이용 후 문 꼭 잠그기</p>
                <p>2. 뒷 정리 깨끗히 하기</p>
                <p>3. 고성방가 금지</p>
                <p>4. 대여 시간 준수하기</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Template>
  );
};

export default Place;
