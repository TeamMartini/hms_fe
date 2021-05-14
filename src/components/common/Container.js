import React from 'react';

const Container = ({ children, className, style }) => {
  const hi = '';
  return (
    <div className={className} style={style} a={hi}>{children}</div>
  );
};

export default Container;
