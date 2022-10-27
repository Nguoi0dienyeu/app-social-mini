import "./post-member.style.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comment from "../comments/comments";
const PostMember = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;
  return (
    <div className="post">
      <div className="container-post">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="post" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 minutes</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content-post">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>10 like</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <CommentOutlinedIcon />
            <span>10 comment</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>share</span>
          </div>
        </div>
        {commentOpen && <Comment />}
      </div>
    </div>
  );
};
export default PostMember;
