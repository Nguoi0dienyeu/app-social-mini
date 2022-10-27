import Activities from "./activities/activity";
import OnlineFriend from "./onlinefriend/online";
import "./rightBar.style.scss";
import Suggest from "./suggest/suggest";

const RightBar = () => {
  return (
    <div className="rigthBar">
      <div className="container-bar">
        <Suggest />
        {/* lats active */}
        <br />
        <Activities />
        <br />
        <OnlineFriend />
      </div>
    </div>
  );
};
export default RightBar;
