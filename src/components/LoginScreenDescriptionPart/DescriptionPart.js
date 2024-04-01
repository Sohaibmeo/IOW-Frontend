import React from "react";
import styles from "./DescriptionPart.module.scss";
import KentSite from "../../assets/images/kent_site.png";
import Box from "@mui/material/Box";
import Footer from "../FooterInvestment/FooterInvestment";

function DescriptionPart() {
  return (
    < div className = {
        styles.descriptionWrapper
    } >
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={KentSite} className={styles.descriptionImage} />
        </div>
        <div className={styles.column}>
          <div className={styles.outer}>
            <h2 className={styles.heading}>
              <div className={styles.headingPart1}> High quality assets. </div>
              <div className={styles.headingPart2}> Smart technology. </div>
            </h2>
            <p className={styles.midParagraph}>
              {" "}
              HoneyBricks gives you fractional access to high quality,
              commercial real estate with vetted partners across the US.{" "}
            </p>
            <p className={styles.lastPara}>
              Don’ t have an account ?<a href="#">Get Started</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default DescriptionPart;
