import { observer } from 'mobx-react-lite';
import React from 'react';
import Routes from '../../constants/routes';
import api from '../../utils/api';
import './SuggestPaper.scss';

const SuggestPaper = observer(() => {
  const handleSuggestClick = () => {
    const title = document.getElementById('title');
    const contact = document.getElementById('contact');
    // const file = document.getElementById('file').value;
    const content = document.getElementById('content');

    api.post(Routes.API.SUGGEST_ADD, {
      title: title.value, contact: contact.value, content: content.value,
    }).then(({ code }) => {
      if (code === 200) {
        title.value = '';
        contact.value = '';
        content.value = '';
        alert('ok');
      } else {
        alert('error occured');
      }
    });
  };

  return (
    <div className="sug-wrap">
      <h1 className="sug-title">건의 / 문의</h1>
      <div className="sug-title-div" />
      <div className="sug-paper">
        <div className="sug-row">
          <p>제목</p>
          <div>
            <input id="title" />
          </div>
        </div>
        <div className="sug-row">
          <p>연락처</p>
          <div>
            <input id="contact" placeholder="이메일 또는 전화번호" />
          </div>
        </div>
        {/* <div className="sug-row">
          <p>파일첨부</p>
          <div>
            <button type="button" className="file-replace">내 PC</button>
            <input id="file" type="file" />
          </div>
  </div> */}
        <div className="sug-row">
          <p>문의내용</p>
          <div>
            <textarea id="content" className="sug-content" />
          </div>
        </div>
        <button className="rnd-btn" type="button" onClick={handleSuggestClick}>보내기</button>
      </div>
    </div>
  );
});

export default SuggestPaper;
