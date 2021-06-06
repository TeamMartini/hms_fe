import React from 'react';
import Container from '../components/common/Container';
import Template from '../components/common/Template';
import './Place.scss';

const Place = () => (
  <Template>
    <Container className="centerBox">
      <div className="place-wrap">
        <div className="place-map" />
        <div className="place-time">
          <div className="time-title">
            <h2>멘토링실 3</h2>
          </div>
          <div className="time-wrap">
            <p className="time-consume">이용시간</p>
            <ul className="time-table">
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
              <li>09:00 ~ 10:00</li>
            </ul>
            <p className="time-alert">* 최대 이용시간은 3시간 입니다.</p>
          </div>
        </div>
        <div className="place-info">
          <div className="place-user">
            <p>
              <span>박한솔</span>
              {' '}
              님
            </p>
            <div className="place-history">
              <p>대여 내역이 없습니다.</p>
            </div>
          </div>
          <div className="place-blank" />
        </div>
      </div>
    </Container>
  </Template>
);

export default Place;
