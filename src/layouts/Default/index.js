import React, { Component } from 'react';
import './style.css';

import Navbar from './components/Navbar';
import Content from './components/Content';

class Default extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Navbar />
        <Content>
          {children}
        </Content>
      </>
    );
  };
}

export default Default;
