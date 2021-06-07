import React from 'react';
import Container from '../components/common/Container';
import Template from '../components/common/Template';
import './Place.scss';

const Place = () => (
  <Template>
    <Container className="centerBox">
      <div className="place-wrap">
        <div className="place-map">
          <div className="place-img">
            <div><img className="place01" src="https://user-images.githubusercontent.com/46181173/120957194-34346880-c790-11eb-90af-09e8320f976b.png" alt="place01" /></div>
            <div><img className="place01" src="https://user-images.githubusercontent.com/46181173/120957198-35659580-c790-11eb-92c8-af2d868cb40e.png" alt="palce02" /></div>
          </div>
        </div>
        <div className="place-time">
          <div className="time-title">
            <h2>멘토링실 3</h2>
          </div>
          <div className="time-wrap">
            <p className="time-consume">이용시간</p>
            <ul className="time-table">
              <li>09:00 ~ 10:00</li>
              <li>10:00 ~ 11:00</li>
              <li>11:00 ~ 12:00</li>
              <li>12:00 ~ 13:00</li>
              <li>13:00 ~ 14:00</li>
              <li>14:00 ~ 15:00</li>
              <li>15:00 ~ 16:00</li>
              <li>16:00 ~ 17:00</li>
              <li>17:00 ~ 18:00</li>
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
          <div className="place-notice">
            <p>
              <span>준수 사항</span>
            </p>
            <div className="place-content">
              <p>
                <div>1. 이용 후 문 꼭 잠그기</div>
                <div>2. 뒷 정리 깨끗히 하기</div>
                <div>3. 고성방가 금지</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Template>
);

export default Place;
