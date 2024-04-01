import { useAccount, useConnect, useDisconnect } from 'wagmi'
import {useEffect} from "react"
import { Box, Button, Typography } from "@mui/material";
import styles from './WalletConnection.module.scss';
// import {setTimeout} from 'timers/promises';
const WalletConnection = (props) => {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { connectors, connect, error} = useConnect();
  useEffect(() => {
    if(isConnected){
      console.log('connecting wallet in useEffect: ')
      props.setConnect(address);
    }
    if(!isConnected){
      console.log('disconnecting wallet in useEffect: ')
      props.setConnect('Connect a wallet');
    }
    }, [isConnected]);
  const connecting = (connector) => {
    console.log('response after connecting: ', connector); 
    connect(connector)  
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      props.modalClose(false);
    }, "30")
  }
  if (!isConnected)
    return (

        <Box className={styles.modal}>
        <Typography className={styles.heading}  variant="h6" component="h2">
          Connect a wallet
        </Typography>
        <Box className={styles.div}>
          <Box className={styles.buttons}>
            {connectors.map((connector) => ( 
              <Button 
                className={styles.button1} 
                key={connector.id} 
                onClick={() => connecting({connector})} >
                {/* <img className={styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJWSURBVHgBdVLPa1NBEJ7d92IfeVp7SGlNvFhoRIMeDCKppFUEL0qxWj0UKvgHSBUvGvBWzKUH07OHYgVPXkw9mIvoIQWlHoRgW/EgIU3TFEXaxNr3dsfZfXlJatuB3Z0f38zOfLsM/pNTd/4MIWdXGbhjwM2w8kmEZWCYlw578nXG+taOZ77SM75qhwKdk+S5B/sJoVGIzK/qu1R5brjeLHAk/jrYdfrSBwrHd5YlQTKZPhqbBiz8dDeGKrO9NVOZnSeTaUQR98MHLQY3LwSgP8y1/XFRQHbeAdEqEO/i9mQF4D7ru12NmnBgySvPIBJiMPvIppPv6L60LmE8XdOn36KU8iI3BE+RQkQhtSrh+cPdyUqUT8VsSycSXlIZvGISwwkEqRsYOd8BR7u95E+LLuQLjr5sIGbC2eMBHbtFoz17swV0H6AUY6ZAGWWN2c6dMJs35gvbkHlVb5AX1AWU9Ee47sAbmIVN1AbTFCNii3zSFdDXW35o+WmZUjgrwAz9YZaK1DJYOjgQCxDY1jCl+zJf+OsV0G+LyywyWpqiVh6o4KEgg9xUN81qwF5SrApI3l0DIZpdznDhyjlVUdD6vSngxuMqFNfE7mTyjVLMcaT3CqoLiWnvJ1778ZR4mPDBAZPB9cEgJGId4I/2IrcJG/UWF0y40+Vs34Qu0HN51UZri74ynPGiPmM+WjPeTuZno/QlWV4YrutHr+R6a0bpbVKgO+2x31j0WZSNpAsptE5nhh22BlVy+11NCY18j+I2piiUIDPqecUKA/4SuJFdzx57347/Bz40Ja0HY65EAAAAAElFTkSuQmCC" alt="icons"/> */}
                {connector.name}
              </Button>
              ))}
              {error && 
              <div>
                {/* <Typography className={styles.subscript} variant="body1" sx={{ mt: 2 }}>
                  {error.message}
                </Typography> */}
              </div>}
              {/* <Button className={styles.button1} onClick={() => connect()} >
                  <img className={styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJWSURBVHgBdVLPa1NBEJ7d92IfeVp7SGlNvFhoRIMeDCKppFUEL0qxWj0UKvgHSBUvGvBWzKUH07OHYgVPXkw9mIvoIQWlHoRgW/EgIU3TFEXaxNr3dsfZfXlJatuB3Z0f38zOfLsM/pNTd/4MIWdXGbhjwM2w8kmEZWCYlw578nXG+taOZ77SM75qhwKdk+S5B/sJoVGIzK/qu1R5brjeLHAk/jrYdfrSBwrHd5YlQTKZPhqbBiz8dDeGKrO9NVOZnSeTaUQR98MHLQY3LwSgP8y1/XFRQHbeAdEqEO/i9mQF4D7ru12NmnBgySvPIBJiMPvIppPv6L60LmE8XdOn36KU8iI3BE+RQkQhtSrh+cPdyUqUT8VsSycSXlIZvGISwwkEqRsYOd8BR7u95E+LLuQLjr5sIGbC2eMBHbtFoz17swV0H6AUY6ZAGWWN2c6dMJs35gvbkHlVb5AX1AWU9Ee47sAbmIVN1AbTFCNii3zSFdDXW35o+WmZUjgrwAz9YZaK1DJYOjgQCxDY1jCl+zJf+OsV0G+LyywyWpqiVh6o4KEgg9xUN81qwF5SrApI3l0DIZpdznDhyjlVUdD6vSngxuMqFNfE7mTyjVLMcaT3CqoLiWnvJ1778ZR4mPDBAZPB9cEgJGId4I/2IrcJG/UWF0y40+Vs34Qu0HN51UZri74ynPGiPmM+WjPeTuZno/QlWV4YrutHr+R6a0bpbVKgO+2x31j0WZSNpAsptE5nhh22BlVy+11NCY18j+I2piiUIDPqecUKA/4SuJFdzx57347/Bz40Ja0HY65EAAAAAElFTkSuQmCC" alt="icons"/>
                  Connect Coinbase
              </Button>
              <Button className={styles.button1} onClick={() => connect()}>
                  <img className={styles.icon} src="https://invest.honeybricks.com/app/static/media/right-icon.6b821dc938404b6546eb58cebaf992cf.svg" alt="icons"/>
                  Wallet Connect
              </Button> */}
              <Box className={styles.or}>
                OR
              </Box>
              <Button className={styles.button1}>
                  <img className={styles.icon} src="https://invest.honeybricks.com/app/static/media/custodial-wallet.b82b4f35a275b9d717fd036ca7770229.svg" alt="icons"/>
                  Manage digital wallet for me
              </Button>
              <Typography className={styles.subscript} variant="body1" sx={{ mt: 2 }}>
                please click here if you dont have one. HoneyBricks will make one for you.
              </Typography>
          </Box>
        </Box>          
      </Box>
    )
    if (isConnected)
  return (
    <Box className={styles.modal}>
        <Typography className={styles.heading}  variant="h6" component="h2">
            Wallet connected
        </Typography>
        <Box className={styles.div}>
          <Box className={styles.buttons}>
            <Typography className={styles.or} variant="h4" >
                connected to  
            </Typography>
            <Typography className={styles.subscript} variant="body1">
                {address}   
            </Typography>
            <Button className={styles.button1} onClick={() => disconnect()}>
                Disconnect
            </Button>
          </Box>
        </Box>     
    </Box>
  )
}
export default WalletConnection;