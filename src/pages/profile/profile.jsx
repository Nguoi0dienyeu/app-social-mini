import "./profile.style.scss";
import { FacebookTwoTone, PlaceOutlined } from "@mui/icons-material";
import {
  EmailOutlined,
  Instagram,
  LanguageOutlined,
  MoreVert,
} from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Pinterest } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Button } from "@mui/material";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/840810/pexels-photo-840810.jpeg"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14096606/pexels-photo-14096606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="useProfile">
          <div className="left">
            <Link to="https://facebook.com">
              <FacebookTwoTone fontSize="small" />
            </Link>
            <Link to="https://facebook.com">
              <Instagram fontSize="small" />
            </Link>
            <Link to="https://facebook.com">
              <Twitter fontSize="small" />
            </Link>
            <Link to="https://facebook.com">
              <LinkedIn fontSize="small" />
            </Link>
            <Link to="https://facebook.com">
              <Pinterest fontSize="small" />
            </Link>
          </div>
          <div className="center">
            <span className="center-profile">{currentUser.name}</span>
            <div className="info">
              <div className="item-profile">
                <PlaceOutlined />
                <span>Viet Nam</span>
              </div>
              <div className="item-profile">
                <LanguageOutlined />
                <span>VietNamese</span>
              </div>
            </div>
            <Button variant="contained" color="success">
              <span>Follow</span>
            </Button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
