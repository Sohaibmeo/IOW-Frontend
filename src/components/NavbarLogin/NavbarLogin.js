import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./NavbarLogin.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo1.svg";
import { useNavigate } from "react-router-dom";
import WalletConnection from "../WalletConnection/WalletConnection";
//modal
import Modal from '@mui/material/Modal';
import EllipsisText from "react-ellipsis-text";
//
//wagmi
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import {polygonMumbai} from 'wagmi/chains' 
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
//
import MenuPopupState from "../PopoverAvatarLoginScreen/Popover";
//wagmi
const NavbarLogin = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(props.showRemainingNavbarAfterSignin); //set true to show bar after login and false before login
  const isLogin = value;
  const isScreenSizeMinBeforeLogin = useMediaQuery("(min-width:1278px)");
  console.log(isScreenSizeMinBeforeLogin);
  const [TabValue, setTValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTValue(newValue);
  };
  const habdleClick = () => {
    setActive(true);
    navigate("/Dashboard", { replace: true });
  };

  const habdleClicko = () => {
    setActive(true);
    navigate("/Grids", { replace: true });
  };
  const habdleClickt = () => {
    setActive(true);

    navigate("/Earnings", { replace: true });
  };
  const [connect, setConnect] = useState('Connect a wallet')

  //
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //wagmi
  const {chains, provider, webSocketProvider} = configureChains(
    [polygonMumbai],
    [publicProvider()])
  const client = createClient({
    autoConnect: true,
    provider, webSocketProvider,
    connectors: [
      // new WalletConnectConnector({ chains}),
      new CoinbaseWalletConnector({ chains}),
      new MetaMaskConnector({ chains}),
    ],
  });
  return (
    <WagmiConfig client={client}>
     <div className={styles.navbarWrapper}>
     <AppBar
        className={styles.mainNavbar}
        sx={{
          marginLeft: "auto",
          background: "black",
          "@media screen and (max-width: 1278px)": {
            background: "white",
          },
        }}
      >
        <Toolbar>
          <div className={styles.honebricksLogoWithoutText}>
            <Box
              component="img"
              alt="Your logo."
              className={styles.logoWithoutText}
              src={logo}
              onClick={habdleClick}
            />{" "}
          </div>
          <div className={styles.honebricksText}>
            <Typography variant="b" component="div">
              HoneyBricks{" "}
            </Typography>{" "}


          </div>
          {isLogin ? (
            <>
              <div className={styles.tabs}>
                <Tabs
                  value={TabValue}
                  TabIndicatorProps={{
                    style: {
                      background: "orange",
                    },
                  }}
                  textColor="white"
                  onChange={handleChange}
                  centered
                >
                  <Tab label="Dashboard" onClick={habdleClick} />
                  <Tab label="Marketplace" onClick={habdleClicko} />
                  <Tab label="Earnings" onClick={habdleClickt} />
                </Tabs>
              </div>{" "}
              <div className={styles.outlined}>
                <Button
                onClick={handleOpen}
                  style={{
                    color: "purple",
                  }}
                >
                { connect === 'Connect a wallet' ? connect: <EllipsisText text={connect} length={"10"} /> }
                </Button>{" "}
              </div>{" "}
              <Typography variant="name" component="div">
                Alia{" "}
              </Typography>{" "}
              <MenuPopupState />
            </>
          ) : (
            <>
              {" "}
              {!isScreenSizeMinBeforeLogin ? (
                <div className={styles.screenMinSignupDiv}>
                  {" "}
                  <Typography variant="screenMinSignup" component="div">
                    <strong> Sign up or Login to HoneyBricks </strong>
                  </Typography>{" "}
                </div>
              ) : (
                <> </>
              )}{" "}
            </>
          )}{" "}
          </Toolbar>{" "}
          </AppBar>{" "}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <WalletConnection
          modalClose = {setOpen}
          setConnect = {setConnect}
          />
        </Modal>
      </div>
    </WagmiConfig>
  );
};

export default NavbarLogin;
