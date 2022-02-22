import React from "react";
import "bulma/css/bulma.css";
import FormField from "./FormField";

const SignupForm = () => {
  return (
    <form>
      <FormField label="Name" type="text" placeholder="e.g ph" />
      <FormField label="E-mail" type="email" placeholder="e.g. ph@gmail.com" />
      <FormField label="Password" type="password" />
    </form>
  );
};

export default SignupForm