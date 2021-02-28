import React, { FC } from "react";
import "./PostCard.css";

type PostCardItemProps = {
  post: { img: string; paragraph: string; title: string };
};

const PostCard: FC<PostCardItemProps> = ({ post }): JSX.Element => {
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
