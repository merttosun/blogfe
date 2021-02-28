import React, { FC } from "react";
import "./PostCard.css";

const PostCard: FC<any> = ({ post }): JSX.Element | null => {
  return (
    <div className="post-card">
      <div className="img-wrapper">
        <img src={post.img} alt="post" />
      </div>
      <div className="post-summary">
        <h2 className="title">{post.title}</h2>
        <p>{post.paragraph}</p>
      </div>
    </div>
  );
};

export default PostCard;
