import {
  AppBar,
  Button,
  Icon,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./NavbarSignUp.module.scss";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo1.svg"
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const NavbarSignUp = () => {
  const navigate = useNavigate()
  return (
    <Box className={styles.navbarWrapper}>
      <AppBar className={styles.mainNavbar}>
        <Toolbar className={styles.contentSetting} >
          <Box className={styles.honebricksLogoWithoutText}>
            <Box
              component="img"
              alt="Your logo."
              src={logo}
               />{" "}
          </Box>
          <Typography variant="h4" className={styles.middleText}>
            Getting Started
          </Typography>{" "}
          <Button className={styles.buttonRight} onClick={()=>navigate('/')} >
          <Icon className={styles.buttonIcon} ><Close/></Icon>
          <Typography variant="b" className={styles.buttonText} >Close</Typography></Button>
        </Toolbar>{" "}
      </AppBar>{" "}
    </Box>
  );
};

export default NavbarSignUp;
