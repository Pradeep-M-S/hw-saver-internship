import React, { Component } from "react";
import "./PostsPage.css";
import Post from "../../components/Post/Post";
class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }
  render() {
    return (
      <div className="posts-page">
        <h4>Posts Page</h4>
        <div className="posts-grid">
          {" "}
          {this.state.posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PostsPage;
