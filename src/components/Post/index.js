import React, { Component } from 'react';

import Comment from './components/Comment';
import Title from './components/Title';
import ReactHtmlParser from 'react-html-parser';

import './style.css';

class Post extends Component {
  render() {
    const { author, date, content, comments } = this.props.data;
    return (
      <div className="post-content">
        <Title
          name={author.name}
          avatar={author.avatar}
          date={date}
        />

        <div className="post">
          {ReactHtmlParser(content)}
        </div>

        <div className="divider"></div>

        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    );
  };
}

export default Post;
