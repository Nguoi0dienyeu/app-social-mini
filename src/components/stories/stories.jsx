import "./stories.style.scss";
import STORY from "../../story.data";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="avatar" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {STORY.map((item) => (
        <div className="story" key={item.id}>
          <img src={item.img} alt="avatar" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Stories;
