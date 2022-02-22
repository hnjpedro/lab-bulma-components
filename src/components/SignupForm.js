import React from "react";
import "bulma/css/bulma.css";
import FormField from "./FormField";
import "./SignupForm.css"
import CoolButton from "./CoolButton"

const SignupForm = () => {
  return (
    <form>
      <FormField label="Name" type="text" placeholder="e.g ph" />
      <FormField label="E-mail" type="email" placeholder="e.g. ph@gmail.com" />
      <FormField label="Password" type="password" />
      <CoolButton isRounded isSuccess type="submit" >Submit form</CoolButton>
    </form>
  );
};

export default SignupForm