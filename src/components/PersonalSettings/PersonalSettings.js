import { Button, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./PersonalSettings.module.scss";

const PersonalSettings = () => {
  const [fname, setFName] = useState("Abbas");
  const [lname, setLName] = useState("Ibn E Akram");
  const [email, setEmail] = useState("ghulam.abbas@devsinc.com");
  const [countryR, setCountryR] = useState("Pakistan");
  const [countryC, setCountryC] = useState("Pakistan");
  const [add, setAdd] = useState("");
  const [ssn, setSSN] = useState("");
  const [btnState,setBtnState]= useState(false);
  const handleChange = (event) => {
    setFName(event.target.value);
    setBtnState(true);
  };
  const saveHandler = (event) => {
    setBtnState(false);
  };
  return (
    <Box className={styles.personalWrapper}>
      <Box className={styles.personalSettingContainer}>
        <Box className={styles.personalHeadingContainer}>
          <h1 className={styles.persHeading}>Personal</h1>
          <Link
            className={styles.personalLearnMore}
            href="#"
            underline="none"
          >
            LEARN MORE
          </Link>
        </Box>
        <Typography className={styles.personalDescription}>
          Your personal information is kept private and not shared with anyone.
        </Typography>
        <Box className={styles.personalInfoContainer}>
          <Box className={styles.width100}>
            <Box className={styles.marginBox}>
              <Box className={styles.textFieldContainer}>
                <TextField fullWidth label="First Name" value={fname} onChange={handleChange} />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField fullWidth label="Last Name" value={lname} />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField fullWidth label="Email" value={email} />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  label="Country of Residence"
                  value={countryR}
                />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  label="Country of Citizenship"
                  value={countryC}
                />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField fullWidth label="Address" value={add} />
              </Box>
              <Box className={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  label="Social Security Number"
                  value={ssn}
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.saveButtonContainer}>
            <Button onClick={saveHandler} className={btnState ? styles.saveButtonEnabled : styles.saveButtonDisabled}>Save Changes</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalSettings;
