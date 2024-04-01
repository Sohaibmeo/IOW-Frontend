import { ArrowBack } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import styles from "./FooterSignUp.module.scss";

const FooterSignup = (props) => {
  return (
    <Paper className={styles.footerWrapper}>
        <BottomNavigation showLabels className={styles.rightContent} >
          <BottomNavigationAction className={styles.flexText} label="Go Back" icon={<ArrowBack />} />
          <BottomNavigationAction className={styles.buttonText} label="Next" form="mi-familia-porfavour" type="submit" />
        </BottomNavigation>
    </Paper>
  )
}
export default FooterSignup;