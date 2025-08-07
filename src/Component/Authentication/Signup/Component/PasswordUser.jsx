import React, { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";
import { useNavigate } from "react-router";
import signupApi from "../../../Api/Auth/signupApi";

const PasswordUser = ({ userDetail, setUserDetail, setStage }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const errorMessageRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handelSend = () => {
    if (passwordRef.current.value.length < 8) {
      errorMessageRef.current = "password must be 8 character long";
      setError(1);
    } else if (
      confirmPasswordRef.current?.value == "" ||
      passwordRef.current.value != confirmPasswordRef.current?.value
    ) {
      errorMessageRef.current = "Password and confirm passwords did not match";
      setError(2);
    } else {
      setError(0);
      let tempUserDetail = userDetail;
      tempUserDetail.password = passwordRef.current.value;
      signupApi(tempUserDetail,navigate,setStage,setUserDetail);
      console.log("temp data", tempUserDetail);
    }
  };

  return (
    <div>
      <p className="text-center text-[2vh] italic">Set up password</p>
      <TextInput
        err={error == 1 && error}
        label={"Password"}
        placeholder={"Enter your Password"}
        ref={passwordRef}
        errormessage={errorMessageRef.current}
      />
      <TextInput
        err={error == 2 && error}
        label={"Confirm Password"}
        placeholder={"Enter your Password Again"}
        ref={confirmPasswordRef}
        errormessage={errorMessageRef.current}
      />
      <div className="flex justify-center text-center">
        <OrangeButton title={"SignUp"} onClick={() => handelSend()} />
      </div>
    </div>
  );
};

export default PasswordUser;
