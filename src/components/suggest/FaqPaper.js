import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useFaqStore } from '../../stores';
import './FaqPaper.scss';

const FaqPaper = observer(() => {
  const {
    fetchFaqList, faqList, setQuery, query,
  } = useFaqStore();

  useEffect(() => {
    fetchFaqList();
  }, [fetchFaqList]);

  const handleAccordionClick = ({ target }) => {
    target.classList.toggle('active');
    const panel = target.nextElementSibling;
    if (panel) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    }
  };

  const FaqItem = ({ type, title, content }) => (
    <div key={title}>
      <button type="submit" className="accordion" onClick={handleAccordionClick}>
        <span>
          {type}
        </span>
        {' '}
        {title}
      </button>
      <div className="panel">
        {content.split('\n').map(line => <p key={line}>{line}</p>)}
      </div>
    </div>
  );

  const handleInputChange = ({ target: { value } }) => setQuery(value);

  return (
    <div className="faq-wrap">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-title-div" />
      <div className="faq-search">
        <input value={query} onChange={handleInputChange} />
        <button type="button">검색</button>
      </div>
      <div className="faq-sheet">
        {faqList.map(faq => FaqItem(faq))}
      </div>
    </div>
  );
});

export default FaqPaper;
