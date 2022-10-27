import { Avatar, Stack } from "@mui/material";
import "./online.styles.scss";
const OnlineFriend = () => {
  return (
    <div className="item">
      <span>Online Friend</span>
      <div className="user">
        <div className="userInfo">
          <Stack direction="column">
            <Avatar
              alt="SsonNguyen"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
        </div>
        <div className="online" />
        <span>Jame Moriaty</span>
      </div>
      <div className="user">
        <div className="userInfo">
          <Stack direction="column">
            <Avatar
              alt="SsonNguyen"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
        </div>
        <div className="online" />
        <span>Jame Moriaty</span>
      </div>
      <div className="user">
        <div className="userInfo">
          <Stack direction="column">
            <Avatar
              alt="SsonNguyen"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
        </div>
        <div className="online" />
        <span>Jame Moriaty</span>
      </div>
    </div>
  );
};

export default OnlineFriend;
