import React, { useState } from "react";

import { Box, Button, Divider, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DistributionSettings from "../DistributionSettings/DistributionSettings";
import PersonalSettings from "../PersonalSettings/PersonalSettings";
 import VerificationSettings from "../VerificationSettings/VerificationSettings";
import DeactivateSettings from "../DeactivateSettings/DeactivateSettings";
import DocumentSettings from "../DocumentSettings/DocumentSettings";
import NavbarLogin from "../NavbarLogin/NavbarLogin";
import styles from "./ProfileSetting.module.scss";

const ProfileSetting = () => {
  const [activeComponent, setActiveComponent] = useState("distribution");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setActiveComponent(event.target.value);
  };

  return (
    <Box className={styles.settingWrapper}>
      <div>
        <NavbarLogin showRemainingNavbarAfterSignin={true} />
      </div>{" "}
      <br />
      <br />
      <br />
      <Box className={styles.boxesPos}>
        <Box>
          <Typography className={styles.dist}>Settings</Typography>
          <Box className={styles.dropDownBox} sx={{ minWidth: 600 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Settings</InputLabel>
              <Select
                // sx={{ "& .MuiSvgIcon-root": { color: "red", paddingBottom:'150px' } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activeComponent}
                label="Settings"
                onChange={handleChange}
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value="distribution">Distributions</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="verification">Verification</MenuItem>
                <MenuItem value="document">Documents</MenuItem>
                <MenuItem value="deactivate">Deactivate Account</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.buttonPos}>
            <Button
              className={
                activeComponent === "distribution"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => {
                setActiveComponent("distribution");
              }}
            >
              Distributions
            </Button>
            <Button
              className={
                activeComponent === "personal"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => {
                setActiveComponent("personal");
              }}
            >
              Personal
            </Button>
            <Button
              className={
                activeComponent === "verification"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => {
                setActiveComponent("verification");
              }}
            >
              Verification
            </Button>
            <Button
              className={
                activeComponent === "document"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => {
                setActiveComponent("document");
              }}
            >
              Document
            </Button>
            <Divider variant="middle" className={styles.horizontalRow} />
            <Button
              className={
                activeComponent === "deactivate"
                  ? styles.activeDeactivateButton
                  : styles.inactiveDeactivateButton
              }
              onClick={() => {
                setActiveComponent("deactivate");
              }}
            >
              Deactivate Account
            </Button>
          </Box>
        </Box>
        <Box className={styles.componentRender}>
          {activeComponent === "distribution" && <DistributionSettings />}
          {activeComponent === "personal" && <PersonalSettings />}
          {activeComponent === "verification" && <VerificationSettings />}
          {activeComponent === "document" && <DocumentSettings />}
          {activeComponent === "deactivate" && <DeactivateSettings />}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSetting;
