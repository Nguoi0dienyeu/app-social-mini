import { Avatar, Stack } from "@mui/material";
import Friend from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Martket from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Calendar from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Photos from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messenges from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Funny from "../../assets/13.png";

import "./leftBar.style.scss";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="containerBar">
        <div className="menu">
          <div className="userBar">
            <Stack direction="column">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/14096606/pexels-photo-14096606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Stack>
            <span>SsonNguyen</span>
          </div>
          <div className="item">
            <img src={Friend} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Martket} alt="" />
            <span>Martket</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Calendar} alt="" />
            <span>Calendar</span>
          </div>
          <hr />
          <div className="menu">
            <span>Your Shortcut</span>
            <div className="item">
              <img src={Events} alt="" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Photos} alt="" />
              <span>Photos</span>
            </div>
            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messenges} alt="" />
              <span>Messenges</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Tutorials} alt="" />
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt="" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Funny} alt="" />
              <span>Funny</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftBar;
