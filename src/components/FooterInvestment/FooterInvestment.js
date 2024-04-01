import React from "react";
import styles from "./FooterInvestment.module.scss";

function Footer() {
  return (
    < div className = {styles.footerWrapper}>
    <div className={styles.mainFooter}>
      <div className={styles.copyright}>© 2022 HoneyBricks, Inc</div>
      <div className={styles.links}>Terms Of Service</div>
      <div className={styles.links}> Privacy Policy </div>
      <div className={styles.links}> Refer & Earn </div>
      <div className={styles.links}> Help Center </div>
      <div className={styles.links}> Learning </div>
    </div>
    </div>
  );
}

export default Footer;
