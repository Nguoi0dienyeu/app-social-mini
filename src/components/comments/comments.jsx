import "./comment.style.scss";
import STORY from "../../story.data";
import { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../../context/authContext";
import { Button } from "@mui/material";
const Comment = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="write" />
        <input type="text" placeholder="write a comment..." />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      {STORY.map((comment) => (
        <div className="comment">
          <img src={comment.profilePickture} alt="" />
          <div className="info-comment">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};
export default Comment;
