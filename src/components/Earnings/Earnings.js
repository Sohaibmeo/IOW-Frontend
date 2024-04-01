import { Box, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./Earnings.module.scss";
import NavbarLogin from "../NavbarLogin/NavbarLogin";

const Earnings = () => {
  return (
    <Box className={styles.wrapper}>
      {/* <div>
        < NavbarLogin showRemainingNavbarAfterSignin = {
          true
        }
        />
      </div>{" "} */}
      <br />
      <br />
      <br />
      <Box className={styles.upBoxPos}>
        <Box className={styles.upperBox}>
          <Typography className={styles.taxStat}>TAX STATUS</Typography>
          <Typography className={styles.pakTax}>PAK Tax Resident</Typography>
        </Box>
      </Box>
      <Box className={styles.lowBoxPos}>
        <Box className={styles.taxAndLearn}>
          <Typography className={styles.taxRes}>
            Tax Responsibilities for Tax Resident of Pakistan
          </Typography>
          <Link
            className={styles.linkMore}
            href="https://support.honeybricks.com/relevant-taxes"
            underline="none"
          >
            LEARN MORE
          </Link>
        </Box>

        <Box className={styles.lowerBox}>
          <Typography className={styles.paraHeading}>
            General Tax Information
          </Typography>
          <Typography className={styles.para1}>
            Investments on the HoneyBricks platform are through security tokens
            that legally represent a membership interest in a limited liability
            company (LLC) that holds the underlying real estate investment, and
            is treated as a partnership for US tax purposes.
          </Typography>
          <Typography className={styles.para2}>
            A separate HoneyBricks entity is the manager of the LLC and covers
            all corporate, federal and state taxes for the investment, with
            individual investors responsible for their individual taxes. To
            facilitate individual tax filings, HoneyBricks will provide:
          </Typography>
          <Typography>
            <ul>
              <li className={styles.listItem}>
                Schedule K1s for each investment on the platform
              </li>
              <li className={styles.listItem}>
                A Tax Summary that aggregates all of an investors tax
                information
              </li>
            </ul>
          </Typography>
          <Typography className={styles.para1}>
            You’ll be notified by email once available, and the documents will
            also be added to your documents in your account settings.
          </Typography>

          <Typography className={styles.paraHeading}>
            Federal and State Tax Filings
          </Typography>
          <Typography className={styles.para1}>
            Non-US investors are subject to withholding taxes, generally
            required to be collected by HoneyBricks from your share of net
            income and capital gains from the sale of the project.
          </Typography>
          <Typography className={styles.para1}>
            The percentage withheld for non-US investors is influenced by tax
            treaties that your country may have with the US. By filing a US Tax
            return, investors may be able to claim the tax already withheld to
            avoid double taxation of the income.
          </Typography>
          <Typography className={styles.para1}>
            The requirement to file state income tax returns varies widely,
            depending on the investor’s state of residence and/or the state
            where the LLC’s property is located. For example, many US states
            have no state income taxes, allow LLCs to file on behalf of members,
            and/or have minimum thresholds that determine if investors are
            required to complete a state tax filing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Earnings;
