import React, { FC } from "react";
// import "./PostCard.css";
import logo from "../../logo.svg";

const PostCard: FC<any> = ({ post }): JSX.Element | null => {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.content.map((c: any) => {
        const CustomTag = c.tag as keyof JSX.IntrinsicElements;
        return <CustomTag>{c.data}</CustomTag>;
      })}
    </div>
  );
};

export default PostCard;
