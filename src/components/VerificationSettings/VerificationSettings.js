import { Link, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import React from "react";

import successImage from '../../assets/images/success.png';
import errorImage from '../../assets/images/error.png';
import styles from "./VerificationSettings.module.scss";

const VerificationSettings = () => {
  return (
    <Box className={styles.verificationWrapper}>
      <Box className={styles.verificationSettingContainer}>
        <Box className={styles.verificationHeadingContainer}>
          <h1 className={styles.verHeading}>Verification</h1>
          <Link
            className={styles.verificationLearnMore}
            href="#"
            underline="none"
          >
            LEARN MORE
          </Link>
        </Box>
        <Typography className={styles.verificationDescription}>
          Account verification includes KYC, as well as accreditation for
          certain investments.
        </Typography>
        <Box className={styles.verificationInfoContainer}>
          <Box className={styles.requiredBox}>
            <Box className={styles.requiredContainer}>
              <Typography className={styles.requiredHeading}>
                Know Your Customer (KYC)
              </Typography>
              <Typography className={styles.requiredDes}>
                KYC is required for all investments on the HoneyBricks platform.
              </Typography>
              <Box className={styles.successBox}>
              <Box className={styles.successImageContainer}>
                <img src={successImage} className={styles.successImage}/>
                </Box>
              <Typography className={styles.successText}>Verification Complete</Typography> 
              </Box>
            </Box>
          </Box>
          <Box className={styles.requiredBox}>
            <Box className={styles.requiredContainer}>
              <Typography className={styles.requiredHeading}>
                Certified Accreditation
              </Typography>
              <Typography className={styles.requiredDes}>
                Allows you to access investments that require certified
                accreditation.
              </Typography>
              <Box className={styles.successBox}>
              <Box className={styles.successImageContainer}>
                <img src={successImage} className={styles.successImage}/>
                </Box>
                <Typography className={styles.successText}>Certification Complete</Typography> 
              </Box>
            </Box>
          </Box>

          <Box className={styles.requiredBox}>
            <Box className={styles.requiredContainer}>
              <Typography className={styles.requiredHeading}>
                Digital wallet address
              </Typography>
              <Typography className={styles.requiredDes}>
                Digital wallets must be approved for investments on HoneyBricks.
              </Typography>
              <Box className={styles.successBox}>
                <Box className={styles.successImageContainer}>
                <img src={successImage} className={styles.successImage}/>
                </Box>
              
              <Typography className={styles.successText}> Verification Complete</Typography> 
              </Box>
            </Box>
          </Box>
          <Box className={styles.requiredBox}>
            <Box className={styles.requiredContainer}>
              <Typography className={styles.requiredHeading}>
                Self-Accreditation
              </Typography>
              <Typography className={styles.requiredDes}>
                Allows you to access investments that require
                self-accreditation.
              </Typography>
              <Box className={styles.errorBox}>
              <Box className={styles.errorImageContainer}>
                <img src={errorImage} className={styles.errorImage}/>
                </Box>
              <Typography className={styles.errorText}>Questionnaire not completed <Link className={styles.completeLink} href="#"> Complete Now</Link> </Typography> 
              </Box>
            </Box>    
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationSettings;
