import React from "react";
import FormPart from "../../components/LoginScreenFormPart/FormPart";
import DescriptionPart from "../../components/LoginScreenDescriptionPart/DescriptionPart";
import MessageIcon from "../../components/MessageIcon/MessageIcon";
import styles from "./LoginScreen.module.scss";
function LoginScreen(props) {

  return (
    <div className={styles.LoginScreenWrapper}>
      <div className={styles.remainingPage}>
        <div className={styles.desPart}>
          <DescriptionPart />
        </div>{" "}

        <div className={styles.fPart}>
          <FormPart />
        </div>{" "}
        < div className={
          styles.liveMessageIcon
        } >
          <MessageIcon />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default LoginScreen;
