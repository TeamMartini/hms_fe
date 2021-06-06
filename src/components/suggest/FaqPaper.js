import React, { useEffect } from 'react';
import './FaqPaper.scss';

const FaqPaper = () => {
  useEffect(() => {
    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i += 1) {
      acc[i].addEventListener('click', (function _(target) {
        return function __() {
          target.classList.toggle('active');
          const panel = target.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
          }
        };
      }(acc[i])));
    }
  }, []);
  return (
    <div className="faq-wrap">
      <h1 className="faq-title">커뮤니티</h1>
      <div className="faq-title-div" />
      <div className="faq-search">
        <input />
        <button type="button">검색</button>
      </div>
      <div className="faq-sheet">
        <button type="submit" className="accordion">
          <span>[회원정보]</span>
          {' '}
          로그인이 안돼요.
        </button>
        <div className="panel">
          <p>소프트웨어 빌리지는 한림대학교 포털 아이디와 비밀번호를 사용합니다.</p>
          <p>한림대학교 포털에서 아이디와 비밀번호를 확인하신 후 로그인 해주세요.</p>
        </div>

        <button type="submit" className="accordion">
          <span>[회원정보]</span>
          {' '}
          회원 탈퇴를 하고 싶어요.
        </button>
        <div className="panel">
          <p>소프트웨어 빌리지는 한림대학교 포털 아이디와 비밀번호를 사용합니다.</p>
          <p>따라서 별도의 회원 탈퇴는 지원하고 있지 않습니다.</p>
        </div>

        <button type="submit" className="accordion">Section 3</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};

export default FaqPaper;
