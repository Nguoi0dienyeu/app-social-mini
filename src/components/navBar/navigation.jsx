import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./navBar.style.scss";
const NavBar = () => {
  return (
    <div className="container-navbar">
      <div className="left-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>S-Social</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
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
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
          <span>SsonNguyen</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
