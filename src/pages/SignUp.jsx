import React, { useState } from 'react'
import FooterSignup from '../components/FooterSignup/FooterSignup'
import NavbarSignUp from '../components/NavbarSignUp/NavbarSignUp'
import SignUpMiddle from '../components/SignUpContent/SignUpMiddle'

const SignUp = (props) => {
  const [formDataFooter, setFormDataFooter] = useState()

  const formDataFetch = () =>{
    setFormDataFooter(props.formDataMiddle);
    console.log(formDataFooter);
  }
  return (
    <React.Fragment>
      <NavbarSignUp />
      <SignUpMiddle />
      <FooterSignup formData={formDataFetch} />
    </React.Fragment>
  )
}

export default SignUp