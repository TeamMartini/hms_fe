import React from 'react';
import './NoticeBox.scss';

const NoticeBox = () => (
  <div className="noticeBox">
    <h2 className="noticeTitle">공지사항</h2>
    <ul className="noticeList">
      <li><a href="/">이것은 공지사항 예시 입니다.</a></li>
      <li><a href="/">이것은 중간의 공지사항 예시 입니다.</a></li>
      <li><a href="/">이것은 조금 더 긴공지사항 예시 입니다.</a></li>
      <li><a href="/">이것은 더욱 많이 많이 긴 공지사항 예시 입니다.</a></li>
    </ul>
  </div>
);

export default NoticeBox;
