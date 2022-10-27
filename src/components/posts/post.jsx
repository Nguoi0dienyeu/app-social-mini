import "./post.style.scss";
import STORY from "../../story.data";
import PostMember from "../post-member/post-member";
const Post = () => {
  return (
    <div className="posts">
      {STORY.map((item) => (
        <PostMember post={item} key={item.id} />
      ))}
    </div>
  );
};
export default Post;
