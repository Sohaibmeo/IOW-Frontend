import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./DeactivateSettings.module.scss";

const DeactivateSettings = () => {
  return (
    <Box className={styles.deactivateWrapper}>
      <Box className={styles.deactivateSettingsContainer}>
        <Box className={styles.deactivateHeadingContainer}>
          <h1 className={styles.deactivateHeading}>Deactivate Account</h1>
          <Link underline="none" href="#" className={styles.deactivateLearnMore}>LEARN MORE</Link>
        </Box>
        <Typography className={styles.deactivateDescription}>
          Looking to deactivate your account with HoneyBricks? You’ll need to
          have transferred or sold your active investments before we can
          deactivate your account.
        </Typography>
        <Box className={styles.deactivateProcessContainer}>
          <Typography className={styles.deactivateProcess}>
            Please contact <Link className={styles.mailLink} href="mailto:investments@honeybricks.com">investments@honeybricks.com</Link>  to deactivate your
            account
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DeactivateSettings;
