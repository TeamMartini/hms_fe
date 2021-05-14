import React from 'react';
import Header from './Header';
import Container from './Container';

const Template = ({ children }) => (
  <>
    <Container className="container">
      <Header />
      {children}
    </Container>
  </>
);

export default Template;
