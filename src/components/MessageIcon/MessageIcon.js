import React from "react";
import styles from "./MessageIcon.module.scss";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { orange } from "@mui/material/colors";
import { color } from "@mui/system";
function MessageIcon() {
    return ( 
        <div className={styles.mainiconouter}>
         < ChatBubbleOutlineIcon 
      className = {styles.ChatBubbleOutlineIcon}
      /></div >
    );
}

export default MessageIcon;
