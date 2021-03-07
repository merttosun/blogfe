import React, {FC} from "react";
import {useHistory} from "react-router-dom";
import "./PostCard.css";

type PostCardItemProps = {
    post: { id: string; img: string; paragraph: string; title: string, techs: string[], createdAt: string };
};

const colors: string[] = ["#166B8C", "#26A699", "#F2B035", "#F24141"]


const PostCard: FC<PostCardItemProps> = ({post}): JSX.Element => {
    const history = useHistory()
    const handleGetPostDetail = (postId: string) => {
        history.push(`/post/${postId}`)
    }

    return (
        <div className="post-card" onClick={() => handleGetPostDetail(post.id)}>
            <div className="img-wrapper">
                <img src={post.img} alt="post" loading="lazy"/>
            </div>
            <div className="post-summary">
                <h2 className="title">{post.title}</h2>
                <p>{post.paragraph}</p>
                <div className="tech-badge-wrapper">{post.techs.map((t, index) => (
                    <span className="tech-badge" style={{background: colors[index]}}>{t}</span>))}</div>

                <span className="date">{post.createdAt}</span>
            </div>
        </div>
    );
};

export default PostCard;
