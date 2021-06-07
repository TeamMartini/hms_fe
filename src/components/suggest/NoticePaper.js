import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Routes from '../../constants/routes';
import { useAuthStore } from '../../stores';
import api from '../../utils/api';
import './SuggestPaper.scss';

const NoticePaper = observer(() => {
  const { checkAutoLogin, username, admin } = useAuthStore();
  const history = useHistory();

  useEffect(() => {
    async function checkLogin() {
      await checkAutoLogin();
      if (!username) {
        history.push('/?ref=/suggest');
      }
      if (!admin) {
        alert('관리자만 접근 가능합니다');
        history.push(Routes.FREE);
      }
    }
    checkLogin();
  }, [admin, checkAutoLogin, history, username]);

  const handleBoardClick = () => {
    const title = document.getElementById('title');
    const content = document.getElementById('content');

    api.post(Routes.API.BOARD_ADD, {
      title: title.value, contents: content.value, division: '게시판',
    }).then(({ code }) => {
      if (code === 200) {
        title.value = '';
        content.value = '';
        alert('ok');
      } else {
        alert('error occured');
      }
    });
  };

  return (
    <div className="sug-wrap">
      <h1 className="sug-title">공지사항 작성</h1>
      <div className="sug-title-div" />
      <div className="sug-paper">
        <div className="sug-row">
          <p>제목</p>
          <div>
            <input id="title" />
          </div>
        </div>
        <div className="sug-row">
          <p>내용</p>
          <div>
            <textarea id="content" className="sug-content" />
          </div>
        </div>
        <button className="rnd-btn" type="button" onClick={handleBoardClick}>작성하기</button>
      </div>
    </div>
  );
});

export default NoticePaper;
