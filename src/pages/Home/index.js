import React, { Component } from 'react';
import './style.css';

import Post from '../../components/Post';
import posts from '../../posts.json';

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </>
    );
  };
}

export default Home;
