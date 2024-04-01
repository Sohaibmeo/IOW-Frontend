import { Box, CardMedia, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material'
import world from "../../assets/images/world.svg"
import React, { useState } from 'react'
import styles from './SignUpMiddle.module.scss'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import CountrySelect from '../CountrySelector/CountrySelector'

const SignUpMiddle = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [residence, setResidence] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [phone, setPhone] = useState('');
  const [agreement,setAgreement] = useState('false')

  const agreementHandler = event => {
    setAgreement(event.target.checked)
  }

  const firstNameHandler = event => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = event => {
    setLastName(event.target.value);
  };
  const emailHandler = event => {
    setEmail(event.target.value);
  };
  const passwordHandler = event => {
    setPassword(event.target.value);
  };
  const saveCitizenshipData = (data) => {
    setCitizenship(data);
  };

  const saveResidenceData = (data) => {
    setResidence(data);
  };

  const SubmitHandler= (event) => {
    event.preventDefault();
    
    const expenseData = {
      firstName:firstName,
      lastName: lastName,
      email:email,
      password:password,
      residence: residence,
      citizenship: citizenship,
      phone: phone,
      agreement: agreement
    };
    console.log(expenseData);
  }

  return (
    <Box className={styles.signUpWrapper}>
        <Typography variant='h4' className={styles.textTop}>A few final details before we create your account.</Typography>
        <Grid container className={styles.totalGrid}>
            <Grid item className={styles.leftSide}>
              <Typography variant='h4' className={styles.gridHeading}>Last step</Typography>
              <Typography variant='h4' className={styles.gridHeading2}>To complete your account set-up, we'll need to confirm some final details about you.
                We keep this information confidential, and never share it without your permission.</Typography>
                <Typography variant='h4' className={styles.gridHeading2}>Your country of citizenship and residency are used to determine 
                what information is required for investing,and which investments you are eligible to participate in.</Typography>
              <Typography className={styles.imageTextFlex} >
                <CardMedia 
                  component="img"
                  image={world}
                  className={styles.iconLikeImage}  
                />
                <Typography component={'span'} className={styles.imageParagraph}>
                    New investments in the marketplace are currently available to 
                    <Typography component={'span'} className={styles.boldText}>{" "}international(non-US) investors{" "}</Typography>
                    and 
                    <Typography component={'span'} className={styles.boldText}>{" "}accredited US investors.</Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item className={styles.rightSide}>
              <Typography className={styles.gridHeading1}>About You</Typography>
              <Divider />
              <form id="mi-familia-porfavour" className={styles.wholeForm} onSubmit={SubmitHandler}>
                  <FormControl className={styles.inputForm1}  >
                  <InputLabel >First Name</InputLabel>
                  <OutlinedInput
                      onChange={firstNameHandler}
                      type="textfield"
                      id="First Name"
                      label="First Name"
                  />
                  </FormControl>

                  <FormControl className={styles.inputForm1} >
                  <InputLabel >Last Name</InputLabel>
                  <OutlinedInput
                      onChange={lastNameHandler}
                      type="textfield"
                      id="Last Name"
                      label="Last Name"
                  />
                  </FormControl>
                <FormControl className={styles.inputForm2} >
                  <InputLabel >Email</InputLabel>
                  <OutlinedInput
                      onChange={emailHandler}
                      type="email"
                      id="email"
                      label="Email"
                  />
                </FormControl>
                <FormControl className={styles.inputForm2} >
                  <InputLabel >Password</InputLabel>
                  <OutlinedInput
                      onChange={passwordHandler}
                      type="password"
                      id="password"
                      label="Password"
                  />
                </FormControl>
                <FormControl >
                  <CountrySelect label="Country of Residence" id="1" onSaveData={saveResidenceData}  />
                </FormControl>
                <FormControl >
                  <CountrySelect label="Country of Citizenship" id="2" onSaveData={saveCitizenshipData} />
                </FormControl>
                <FormControl className={styles.phoneNumber}>
                  <PhoneInput
                    onChange={setPhone}
                    inputProps={{
                      className:`${styles.inputStyle}`,
                      placeholder:"1 (702) 123-4567",
                      required: true,
                      autoFocus: true,
                      country: 'us',
                    }}
                  />
                </FormControl>
                <FormControl className={styles.formAgreement} >
                  <FormControlLabel label="I have read and accept the Terms of Service, Electronic Communications and Privacy Policy" 
                  control={<Checkbox onChange={agreementHandler} defaultunchecked="true" />} 
                   />
                </FormControl>
              </form>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SignUpMiddle