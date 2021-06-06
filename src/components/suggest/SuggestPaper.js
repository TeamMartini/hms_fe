import React from 'react';
import './SuggestPaper.scss';

const SuggestPaper = () => (
  <div className="sug-wrap">
    <h1 className="sug-title">건의 / 문의</h1>
    <div className="sug-title-div" />
    <div className="sug-paper">
      <div className="sug-row">
        <p>제목</p>
        <div>
          <input />
        </div>
      </div>
      <div className="sug-row">
        <p>연락처</p>
        <div>
          <input placeholder="이메일 또는 전화번호" />
        </div>
      </div>
      <div className="sug-row">
        <p>파일첨부</p>
        <div>
          <button type="button" className="file-replace">내 PC</button>
          <input type="file" />
        </div>
      </div>
      <div className="sug-row">
        <p>문의내용</p>
        <div>
          <textarea className="sug-content" />
        </div>
      </div>
    </div>
  </div>
);

export default SuggestPaper;
