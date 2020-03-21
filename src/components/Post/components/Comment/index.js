import React from 'react';
import './style.css';

const Comment = ({data}) => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={data.author.avatar} alt=""/>
      </div>
      <div className="content">
        <p>
          <strong>{data.author.name}</strong> {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
