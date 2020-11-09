import React, { useState } from "react";
import "./Post.css";
import CustomButton from "../CustomButton/CustomButton";
const Post = ({ id, title, body }) => {
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  };
  return (
    <>
      {" "}
      <div className="individual-posts">
        <div
          className="individual-post"
          onClick={() => {
            fetchComments();
            setShowMore(!showMore);
          }}
        >
          {" "}
          <h1 className="post-id">{id} .</h1>
          <h1 className="post-title">{title}</h1>
          <CustomButton
            onClick={() => {
              fetchComments();
              setShowMore(!showMore);
            }}
          >
            More{" "}
          </CustomButton>
        </div>
        {showMore ? (
          <div>
            <h3 style={{ width: "100%" }} className="post-body">
              {body}
            </h3>
            <h2>Comments</h2>
            {comments.map((comment) => (
              <ul key={comment.id}>
                <li key={comment.id}>{comment.name}</li>
              </ul>
            ))}
          </div>
        ) : null}
      </div>{" "}
    </>
  );
};

export default Post;
