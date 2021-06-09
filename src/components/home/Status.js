import React, { useCallback, useEffect, useState } from 'react';
import Routes from '../../constants/routes';
import api from '../../utils/api';

import './Status.scss';

const Status = () => {
  const [handler, setHandler] = useState(null);
  const [pos, setPos] = useState([-100, -100, -1]);
  const [status, setStatus] = useState([]);
  const upper = [1054, 558];
  const rooms = ['대강의실', '스튜디오', '회의실', '실습실', '멘토링실1', '멘토링실2', '멘토링실3', '멘토링실4'];
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

  const fetchInfo = useCallback(() => {
    api.get(Routes.API.IOT).then(({ code, map, message }) => {
      if (code === 200) {
        if (message) {
          setStatus(new Array(8).fill('오류'));
        } else {
          setStatus(map.map(({ count }) => `${count}명`));
          // console.log(status);
        }
      }
    });
  }, []);

  const isNull = useCallback(() => handler === null, [handler]);
  const clearHandler = useCallback(() => clearInterval(handler), [handler]);
  useEffect(() => {
    if (isNull()) {
      setHandler(setInterval(fetchInfo, 10000));
    }
    return () => {
      clearHandler();
    };
  }, [clearHandler, fetchInfo, isNull]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  const handleResize = useCallback(() => {
    let w1 = 0;
    let w2 = 0;
    if (document.querySelector('.upper')) {
      w1 = document.querySelector('.upper').width;
      w2 = document.querySelector('.under').width;
    }
    const r1 = w1 / upper[0];
    const r2 = w2 / under[0];
    const upc = upperCoords.map((c, i) => (i % 5 === 0 ? c : c * r1));
    const udc = underCoords.map((c, i) => (i % 5 === 0 ? c : c * r2));
    setUpCoord(upc);
    setUdCoord(udc);
  }, [under, underCoords, upper, upperCoords]);

  useEffect(() => {
    window.onload = handleResize;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [toggle, setToggle] = useState(false);
  const [tabToggle, setTabToggle] = useState(['status-panels']);

  const handleToggleClick = useCallback(value => () => {
    setToggle(value);
    setTabToggle(['status-panels', value ? 'toggle' : '']);
  }, []);

  const handleMouseMove = useCallback(e => {
    const { target } = e;
    const rect = target.getBoundingClientRect();
    if (pos[0] !== rect.x || pos[1] !== rect.y) {
      setPos([rect.x, rect.y - 52, target.textContent]);
    }
  }, [pos]);

  const handleMouseOut = useCallback(() => {
    setPos([-100, -100, -1]);
  }, []);

  return (
    <div className="status-wrap">
      <div className="status-tabs">
        <button
          type="button"
          className={toggle ? '' : 'toggle-active'}
          onClick={handleToggleClick(false)}
        >
          빌리지
        </button>
        <button
          type="button"
          className={toggle ? 'toggle-active' : ''}
          onClick={handleToggleClick(true)}
        >
          북카페
        </button>
      </div>
      <div className={tabToggle.join(' ')}>
        <div>
          <img className="upper" src="./images/upper.png" alt="빌리지" />
          {iter.map(i => {
            const [key, ...coords] = upCoord.slice(i * 5, (i + 1) * 5);
            let upperTop = 0;
            if (document.querySelector('.upper')) {
              upperTop = document.querySelector('.upper').offsetTop;
            }
            const style = { left: `${coords[0]}px`, top: `${upperTop + coords[1]}px` };
            style.width = `${coords[2] - coords[0]}px`;
            style.height = `${coords[3] - coords[1]}px`;
            return (
              <button
                type="button"
                className="image-map"
                key={key}
                style={style}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseOut}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div>
          <img className="under" src="./images/under.png" alt="북카페" />
          {iter.map(i => {
            const [key, ...coords] = udCoord.slice(i * 5, (i + 1) * 5);
            let underTop = 0;
            if (document.querySelector('.under')) {
              underTop = document.querySelector('.under').offsetTop;
            }
            const style = { left: `${coords[0]}px`, top: `${underTop + coords[1]}px` };
            style.width = `${coords[2] - coords[0]}px`;
            style.height = `${coords[3] - coords[1]}px`;
            return (
              <button
                type="button"
                className="image-map"
                key={key}
                style={style}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseOut}
              >
                {key + 4}
              </button>
            );
          })}
        </div>
      </div>
      <div className="pop-name" style={{ left: `${pos[0]}px`, top: `${pos[1]}px` }}>{`${rooms[pos[2]]} : ${status[pos[2]]}`}</div>
    </div>
  );
};

export default Status;
