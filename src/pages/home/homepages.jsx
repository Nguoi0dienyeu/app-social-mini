import "./home.style.scss";
import Post from "../../components/posts/post";
import Stories from "../../components/stories/stories";
const HomePages = () => {
  return (
    <div className="home">
      <Stories />
      <Post />
    </div>
  );
};
export default HomePages;
