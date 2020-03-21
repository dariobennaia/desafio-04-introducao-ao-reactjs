import React from 'react';
import './style.css';

const Title = ({avatar, name, date}) => {
  return (
    <div className="title">
      <img src={avatar} alt=""/>
      <div>
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Title;
