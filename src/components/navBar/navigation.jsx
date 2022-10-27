import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./navBar.style.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container-navbar">
      <div className="left-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>S-Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <LightModeIcon onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )}
        <AppRegistrationOutlinedIcon />
        <div className="search-nav">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right-nav">
        <PersonOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <LanguageOutlinedIcon />
        <div className="user-nav">
          <Stack direction="column">
            <Avatar alt="ssonnguyen" src={currentUser.profilePic} />
          </Stack>
          <span>ssonnguyen</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
