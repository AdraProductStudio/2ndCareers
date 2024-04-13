import React, { useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";



const ResetPasswordForm = () => {
  const pageNavigate = useNavigate();
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({});

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email address is required."
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }


    if (Object.keys(newErrors).length === 0) {
      // toast.success('An Email with a link has been sent to your Inbox to change the password')
      setTimeout(() => {
        pageNavigate("/reset-password")
      }, 3000)
    } else {
      setErrors(newErrors);
    }
  }




  return (
    <form onSubmit={handleSubmit}>

      <div className="input-group mb-3 login-form">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon1"
          reIcons={<PiEnvelopeSimpleOpenThin className="fs-3" />}
        />
        <Input
          type="email"
          className="form-control login-input border border-0 rounded-3"
          placeHolder="Email ID"
          ariaLabel="email"
          testId="reset-email"
          name="email_id"
          functionOnchange={(e) => setEmail(e.target.value)}
          functionOnkeyDown={handlekeydown}
        />
        {errors.email && <Label className="py-2 text-danger col-12" title={errors.email} />}
      </div>

      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg  btn-login fw-bold mb-2"
          title="Reset password"
          buttonType="submit"
          testId="reset-button"
        />
      </div>

    </form>
  );
};

export default ResetPasswordForm;
