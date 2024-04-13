import React, { useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";


const ForgetPasswordForm = () => {
  const pageNavigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [resetPass, setResetPass] = useState({
    password: '',
    confirmPassword: ''
  })



  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }


  const handleSubmitData = (e) => {
    e.preventDefault()
    setErrors({});
    let newErrors = {};

    // Validate password
    if (!resetPass.password) {
      newErrors.password = 'Password is required.';
    }

    //validate confirm password
    if (!resetPass.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    }

    if (resetPass.password && resetPass.confirmPassword) {
      if (resetPass.password !== resetPass.confirmPassword) {
        newErrors.notMatching = 'Confirm Password must match the Password field';
      }
    }


    // on submit
    if (Object.keys(newErrors).length === 0) {
      pageNavigate("/")
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <form onSubmit={handleSubmitData}>
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
          testId="forgot-email"
          value="secondcareer123@gmail.com"
          disabled={true}
        />
      </div>


      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type={showPassword ? "text" : "password"}
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3 password-field-focus"
          placeHolder="New Password"
          ariaLabel="password"
          testId="forgot-password"
          functionOnchange={(e) =>
            setResetPass({ ...resetPass, [e.target.name]: e.target.value })
          }
          functionOnkeyDown={handlekeydown}
          name="password"
        />
        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={showPassword ? <PiEyeLight className="fs-3 visible-eye" /> : <BsFillEyeSlashFill className="fs-3 visible-eye" />}
          onClick={()=>setShowPassword(!showPassword)}
        />

        {errors.password && <Label className="py-2 text-danger col-12" title={errors.password} />}
      </div>



      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type={showConfPassword ? "text" : "password"}
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3 password-field-focus"
          placeHolder="Confirm Password"
          ariaLabel="password"
          testId="forgot-confirm-password"
          functionOnchange={(e) =>
            setResetPass({ ...resetPass, [e.target.name]: e.target.value })
          }
          functionOnkeyDown={handlekeydown}
          name="confirmPassword"
        />
        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={showConfPassword ? <PiEyeLight className="fs-3 visible-eye" /> : <BsFillEyeSlashFill className="fs-3 visible-eye" />}
          onClick={()=>setShowConfPassword(!showConfPassword)}
        />
        {errors.confirmPassword && <Label className="py-2 text-danger col-12" title={errors.confirmPassword} />}
        {errors.notMatching && <Label className="py-2 text-danger col-12" title={errors.notMatching} />}
      </div>


      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg btn-login fw-bold mb-2"
          title="Submit"
          testId="forgot-submit-button"
          buttonType="submit"
        />
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
