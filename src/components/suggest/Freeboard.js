import React from 'react';
import './Freeboard.scss';

const Freeboard = () => (
  <div className="free-wrap">
    <h1 className="free-title">자유게시판</h1>
    <div className="free-title-div" />
    <div className="board-write">
      <button type="button">글쓰기</button>
    </div>
    <div className="free-board">
      <div className="board-row row-header">
        <p className="board-num">번호</p>
        <p className="board-title">제목</p>
        <p className="board-author">이름</p>
        <p className="board-date">날짜</p>
      </div>
      <div className="board-row">
        <p className="board-num">999</p>
        <p className="board-title">제 19회 임베디드 SW 경진대회</p>
        <p className="board-author">관리자</p>
        <p className="board-date">21-06-01</p>
      </div>
      <div className="board-row">
        <p className="board-num">999</p>
        <p className="board-title">제 19회 임베디드 SW 경진대회</p>
        <p className="board-author">관리자</p>
        <p className="board-date">21-06-01</p>
      </div>
      <div className="board-row">
        <p className="board-num">999</p>
        <p className="board-title">제 19회 임베디드 SW 경진대회</p>
        <p className="board-author">관리자</p>
        <p className="board-date">21-06-01</p>
      </div>
      <div className="board-row">
        <p className="board-num">999</p>
        <p className="board-title">제 19회 임베디드 SW 경진대회</p>
        <p className="board-author">관리자</p>
        <p className="board-date">21-06-01</p>
      </div>
    </div>
  </div>
);

export default Freeboard;
