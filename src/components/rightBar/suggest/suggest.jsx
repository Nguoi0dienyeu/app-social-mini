import { Avatar, Button, Stack } from "@mui/material";

const Suggest = () => {
  return (
    <div className="item">
      <span>Suggestion for you</span>
      <div className="user">
        <div className="userInfo">
          <Stack direction="column">
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
          <span>Spider</span>
        </div>
        <div className="btn-user">
          <Button variant="contained" color="success">
            <span>Follow</span>
          </Button>
          <Button variant="outlined">
            <span>Subscriber</span>
          </Button>
        </div>
      </div>
      <div className="user">
        <div className="userInfo">
          <Stack direction="column">
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/photos/login-and-pas…ection-and-secured-picture-id1271787791?s=612x612"
            />
          </Stack>
          <span>Spider</span>
        </div>
        <div className="btn-user">
          <Button variant="contained" color="success">
            <span>Follow</span>
          </Button>
          <Button variant="outlined">
            <span>Subscriber</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
