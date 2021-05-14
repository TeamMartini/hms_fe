import React from 'react';
import { useLocation } from 'react-router';
import Container from '../components/common/Container';
import SideNav from '../components/common/SideNav';
import Template from '../components/common/Template';
import Freeboard from '../components/suggest/Freeboard';
import SuggestPaper from '../components/suggest/SuggestPaper';
import './Suggest.scss';

const Suggest = () => {
  const { pathname } = useLocation();
  let path = pathname.substr(8);
  if (path.startsWith('/')) path = path.substr(1);
  if (path.endsWith('/')) path = path.substr(0, path.length - 1);

  return (
    <Template>
      <Container className="contentBox">
        <SideNav />
        <Container className="paper">
          {(path === 'free')
            ? <Freeboard />
            : <SuggestPaper />}
        </Container>
      </Container>
    </Template>
  );
};

export default Suggest;
