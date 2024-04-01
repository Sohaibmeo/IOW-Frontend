import React, { useState } from "react";
import styles from "./FormPart.module.scss";
import logo from "../../assets/images/log.svg";
import Box from "@mui/material/Box";
import glogo from "../../assets/images/logogoggle.png";
import stytchlogo from "../../assets/images/stytch_logo.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";
import star from "../../assets/images/star.png";
import greentick from "../../assets/images/greentick.svg";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function FormPart() {
  const navigate = useNavigate();

  const handleSubmitContinue = () => {
    navigate("/Dashboard");
  };

  return (
    <div className={styles.formWrapper}>
      <Box className={styles.outerForm}>
        <Box className={styles.loginBlock}>
          <Box className={styles.headingSignin}>
            <Box className={styles.headingWPicture}>
              <p className={styles.textLoginHead}>Sign up or Login to</p>
              <img src={logo} className={styles.imageFormLogo} />
            </Box>
          </Box>
          <Box className={styles.Form}>
            <Box className={styles.innerForm}>
              <Box>
                <button className={styles.CountinueGoogle}>
                  <img src={glogo} className={styles.googleLogo} />
                  <span className={styles.spanCountinueGoogle}>
                    {" "}
                    Continue with Google{" "}
                  </span>
                </button>
              </Box>
              <Box className={styles.orPart}>
                <Box className={styles.line}> </Box>
                <p className={styles.orText}>OR</p>
                <Box className={styles.line}> </Box>
              </Box>
              <Box>
                <form>
                  <div className={styles.textFeildInput}>
                    <div className={styles.inputFeildForm}>
                      <input
                        className={styles.inputFeild}
                        name="email"
                        placeholder="example@email.com"
                        required
                        type="text"
                        style={{ paddingLeft: "10px" }}
                      ></input>
                    </div>
                  </div>
                  <br />
                  <div className={styles.textFeildInput}>
                    <div className={styles.inputFeildForm}>
                      <input
                        className={styles.inputFeild}
                        name="password"
                        placeholder="password"
                        required
                        type="password"
                        style={{ paddingLeft: "10px" }}
                      ></input>
                    </div>
                  </div>
                  <p class="space"></p>
                  <button
                    type="submit"
                    className={styles.buttonCountinueWithGoogle}
                    onClick={handleSubmitContinue}
                  >
                    <span className={styles.buttoncountinueWithGoogleLabel}>
                      Login
                    </span>
                  </button>
                  </form>
                  <br />
                  <br />
                  <div className={styles.SignUpDiv}>
                    <span
                      style={{ color: "grey" }}
                      className={styles.buttoncountinueWithGoogleLabel}
                    >
                      <strong>Don't have an account? </strong>
                    </span>
                    <strong>
                      {" "}
                      <Link
                        component="button"
                        underline="none"
                        onClick={() => {navigate('/signup');}}
                      >
                        {"Sign up here"}
                      </Link>
                    </strong>
                  </div>
                
                <br />
                <Box className={styles.stytch}>
                  <a href="https: //stytch.com/">
                    <img className={styles.imageStytch} src={stytchlogo} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.cardFormLogin}>
            <p className={styles.cardTextFormLogin}>
              Join our investor community building their wealth with commercial
              real estate.
            </p>
            <Box className={styles.avatarsAndStars}>
              <AvatarGroup total={5}>
                <Avatar alt="Remy Sharp" src={profile1} />
                <Avatar alt="Travis Howard" src={profile2} />
                <Avatar alt="Agnes Walker" src={profile3} />
                <Avatar alt="Agnes Walker" src={profile4} />
                <Avatar alt="Trevor Henderson" src={profile5} />
              </AvatarGroup>

              <Box className={styles.starsImage}>
                <Box className={styles.singleStar}>
                  <img classname={styles.star} src={star} />
                </Box>
                <Box className={styles.singleStar}>
                  <img classname={styles.star} src={star} />
                </Box>
                <Box className={styles.singleStar}>
                  <img classname={styles.star} src={star} />
                </Box>
                <Box className={styles.singleStar}>
                  <img classname={styles.star} src={star} />
                </Box>
                <Box className={styles.singleStar}>
                  <img classname={styles.star} src={star} />
                </Box>
              </Box>
            </Box>
            <Box className={styles.tickTopLeft}>
              <img src={greentick} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default FormPart;
