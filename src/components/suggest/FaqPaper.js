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
        <button type="submit" className="accordion">Section 1</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button type="submit" className="accordion">Section 2</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
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
