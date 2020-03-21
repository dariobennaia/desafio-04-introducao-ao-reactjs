import React from 'react';
import './style.css';

const Content = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
}

export default Content;
