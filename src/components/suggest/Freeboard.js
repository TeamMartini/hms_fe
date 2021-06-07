import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Routes from '../../constants/routes';
import { useBoardStore } from '../../stores';
import './Freeboard.scss';

const Freeboard = observer(() => {
  const {
    fetchBoardList, boardList, query, setQuery,
  } = useBoardStore();

  const history = useHistory();

  useEffect(() => {
    fetchBoardList();
  }, [fetchBoardList]);

  const handleQueryInput = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleWriteClick = () => {
    history.push(Routes.WRITE);
  };

  return (
    <div className="free-wrap">
      <h1 className="free-title">공지사항</h1>
      <div className="free-title-div" />
      <div className="board-write">
        <input placeholder="검색어 입력" value={query} onChange={handleQueryInput} />
        <button type="button" onClick={handleWriteClick}>글쓰기</button>
      </div>
      <div className="free-board">
        <div className="board-row row-header">
          <p className="board-num">번호</p>
          <p className="board-title">제목</p>
          <p className="board-author">이름</p>
          <p className="board-date">날짜</p>
        </div>
        {boardList.map(({ postNumber, title, date }) => (
          <div className="board-row">
            <p className="board-num">{postNumber || ''}</p>
            <p className="board-title">{title || ''}</p>
            <p className="board-author">{postNumber ? '관리자' : ''}</p>
            <p className="board-date">{date || ''}</p>
          </div>
        ))}

      </div>
    </div>
  );
});

export default Freeboard;
