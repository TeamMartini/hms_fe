import React from 'react';
import { useLocation } from 'react-router';
import Container from '../components/common/Container';
import SideNav from '../components/common/SideNav';
import Template from '../components/common/Template';
import FaqPaper from '../components/suggest/FaqPaper';
import Freeboard from '../components/suggest/Freeboard';
import NoticePaper from '../components/suggest/NoticePaper';
import NoticeViewer from '../components/suggest/NoticeViewer';
import SuggestPaper from '../components/suggest/SuggestPaper';
import './Suggest.scss';

const Suggest = () => {
  const { pathname } = useLocation();
  let path = pathname.substr(8);
  if (path.startsWith('/')) path = path.substr(1);
  if (path.indexOf('/')) [path] = path.split('/');

  let child = null;
  switch (path) {
    case 'free': child = <Freeboard />;
      break;
    case 'faq': child = <FaqPaper />;
      break;
    case 'write': child = <NoticePaper />;
      break;
    case 'read': child = <NoticeViewer />;
      break;
    default:
      child = <SuggestPaper />;
  }

  return (
    <Template>
      <Container className="contentBox">
        <SideNav />
        <Container className="paper-suggest">
          {child}
        </Container>
      </Container>
    </Template>
  );
};

export default Suggest;
