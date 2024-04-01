import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import LaunchIcon from "@mui/icons-material/Launch";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styles from "./Popover.module.scss";
import Stack from "@mui/material/Stack";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useNavigate } from "react-router-dom";

const MenuPopupState = () => {
  const navigate = useNavigate();
const handleClick=(component)=>{
  navigate(component);
}
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  return (
    <div className={styles.popoverWrapper}>
      {" "}
      <Button>
        <Avatar
          alt="A "
          src="/static/images/avatar/2.jpg"
          {...bindTrigger(popupState)}
        />
        <Menu
          sx={{ top: "10px", opacity: "1" }}
          PaperProps={{
            sx: {
              width: "200px",
            },
          }}
          {...bindMenu(popupState)}
        >
          <MenuItem onClick={() => navigate("/Dashboard")}>
            {" "}
            <div className={styles.textPopover}>
              {" "}
              <Typography variant="inherit"> Dashboard </Typography>
            </div>
          </MenuItem>{" "}
          <MenuItem onClick={() => navigate("/Grids")}>
            {" "}
            <div className={styles.textPopover}>
              {" "}
              <Typography variant="inherit"> Marketing </Typography>
            </div>
          </MenuItem>{" "}
          <MenuItem onClick={() => navigate("/Earnings")}>
            {" "}
            <div className={styles.textPopover}>
              {" "}
              <Typography variant="inherit"> Earning </Typography>
            </div>
          </MenuItem>{" "}
          <MenuItem onClick={() => navigate("/ProfileSetting")}>    {" "}
            <div className={styles.textPopover}>
              {" "}
              <Typography variant="inherit"> Settings </Typography>{" "}
            </div>
          </MenuItem>{" "}
          <MenuItem onClick={popupState.close}>
            {" "}
            <div className={styles.textPopover}>
              {" "}
              <Typography variant="inherit"> Feedback </Typography>
            </div>{" "}
          </MenuItem>{" "}
          <MenuItem onClick={popupState.close}>
            {" "}
            <div>
              {" "}
              <Stack direction="row" spacing={1}>
                <div>
                  {" "}
                  <Typography variant="inherit"> Refer & Earn </Typography>
                </div>
                <LaunchIcon sx={{ paddingTop: "3px" }} fontSize="xsmall" />{" "}
              </Stack>
            </div>
          </MenuItem>{" "}
          <MenuItem onClick={popupState.close}>
            {" "}
            <div>
              {" "}
              <Stack direction="row" spacing={1}>
                <div>
                  {" "}
                  <Typography variant="inherit"> Help Centre</Typography>
                </div>
                <LaunchIcon
                  sx={{
                    paddingTop: "3px",
                  }}
                  fontSize="xsmall"
                />{" "}
              </Stack>{" "}
            </div>{" "}
          </MenuItem>{" "}
          <MenuItem onClick={popupState.close}>
            {" "}
            <div>
              {" "}
              <Stack direction="row" spacing={1}>
                <div>
                  {" "}
                  <Typography variant="inherit"> Learning </Typography>
                </div>
                <LaunchIcon
                  sx={{
                    paddingTop: "3px",
                  }}
                  fontSize="xsmall"
                />{" "}
              </Stack>{" "}
            </div>{" "}
          </MenuItem>{" "}
          <Divider
            sx={{
              my: 0.5,
            }}
          />
          <MenuItem onClick={() => navigate("/")}> Sign Out </MenuItem>{" "}
        </Menu>{" "}
      </Button>
    </div>
  );
};

export default MenuPopupState;
