import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../constants/routes';
import { useBoardStore } from '../../stores';
import './NoticeBox.scss';

const NoticeBox = observer(() => {
  const { _boardList, fetchBoardList } = useBoardStore();

  useEffect(() => {
    fetchBoardList();
  }, [fetchBoardList]);

  return (
    <div className="noticeBox">
      <h2 className="noticeTitle">공지사항</h2>
      <ul className="noticeList">
        {_boardList.slice(0, Math.min(4, _boardList.length)).map(({ title, postNumber }) => {
          const url = Routes.READ + postNumber;
          return <li key={postNumber}><Link to={url}>{title}</Link></li>;
        })}
      </ul>
    </div>
  );
});

export default NoticeBox;
