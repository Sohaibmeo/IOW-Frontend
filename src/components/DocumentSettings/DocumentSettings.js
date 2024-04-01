import { Link, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React from "react";

import styles from "./DocumentSettings.module.scss";

function createData(name, date, investment) {
  return { name, date, investment };
}
const rows = [
  createData("ID Card", 159, 6.0),
  createData("Passport", 237, 9.0),
  createData("SSN", 262, 16.0),
];

const VerificationSettings = () => {
  return (
    <Box className={styles.documentWrapper}>
      <Box className={styles.documentSettingContainer}>
        <Box className={styles.documentHeadingContainer}>
          <h1 className={styles.docHeading}>Documents</h1>
          <Link
            className={styles.documentLearnMoreLink}
            href="#"
            underline="none"
          >
            LEARN MORE
          </Link>
        </Box>
        <Typography className={styles.documentDescription}>
          All documents you have signed are listed below.
        </Typography>
        <Box className={styles.verificationInfoContainer}>
          <TableContainer className={styles.tableDesign} component={Box}>
            <Table>
              <TableHead className={styles.headDesign}>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Investment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.investment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationSettings;
