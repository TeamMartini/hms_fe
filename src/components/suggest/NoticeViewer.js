import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Routes from '../../constants/routes';
import api from '../../utils/api';
import './SuggestPaper.scss';
import './NoticeViewer.scss';

const NoticeViewer = observer(() => {
  const location = useLocation();
  const history = useHistory();
  const [board, setBoard] = useState({
    title: '',
    date: '',
    contents: '',
  });

  useEffect(() => {
    const postNumber = parseInt(location.search.substr(1), 10);
    async function fetchBoard() {
      const _board = await api.get(Routes.API.BOARD_INFO, { postNumber });
      if (_board.code === 200) {
        setBoard(_board.board);
      }
    }
    fetchBoard();
  }, [history, location.search]);
  const handleListClick = () => {
    history.goBack();
  };

  return (
    <div className="sug-wrap">
      <h1 className="sug-title">공지사항</h1>
      <div className="sug-title-div" />
      <div className="nov-title">
        <p>
          제목 :
          {' '}
          {board.title}
        </p>
      </div>
      <div className="nov-title">
        <p>작성자 : 관리자</p>

        <p>
          작성일 :
          {' '}
          {board.date}
        </p>
      </div>
      <div className="nov-content">
        <pre>{board.contents}</pre>
      </div>
      <div>
        <button className="rnd-btn" type="button" onClick={handleListClick}>뒤로가기</button>
      </div>
    </div>
  );
});

export default NoticeViewer;
