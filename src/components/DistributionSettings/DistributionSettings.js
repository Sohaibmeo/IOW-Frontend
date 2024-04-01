import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import styles from "./DistributionSettings.module.scss";

const options = ["USD Coin"];
const DistributionSettings = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Box className={styles.distributionWrapper}>
      <Box className={styles.distributionSettingContainer}>
        <Box className={styles.distributionHeadingContainer}>
          <h1 className={styles.distributionHeading}>Distributions</h1>
          <Link
            className={styles.distributionLearnMore}
            href="#"
            underline="none"
          >
            LEARN MORE
          </Link>
        </Box>
        <Typography className={styles.distributionDescription}>
          HoneyBricks distributes proceeds from each investment to your account.
        </Typography>
        <Box className={styles.distributionCurrencyContainer}>
          <Box className={styles.distributionHeadingContainer}>
            <h3 className={styles.distributionSubHeading}>
              Distributions Currency
            </h3>
            <Link
              className={styles.distributionLearnMore}
              href="#"
              underline="none"
            >
              LEARN MORE
            </Link>
          </Box>
          <Typography className={styles.distributionSubDescription}>
            Distributions from your investments will be distributed either via
            ACH or USDC transfer. Expect support for more currencies in the
            future.
          </Typography>
          <Autocomplete
          IconComponent={ExpandMoreIcon}
            className={styles.autoCompleteBox}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                defaultValue={options[0]}
                {...params}
                label="Select Cryptocurrency"
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DistributionSettings;
