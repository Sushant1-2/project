import React, { useRef, useState } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";

function UserDetails() {
  const [err, setErr] = useState(0);
  const name = useRef("");
  const phone = useRef("");
  const address = useRef("");

  const handleProcess = () => {
    if (name.current?.value == "" || name.current?.value.length < 3) {
      setErr(1);
    } else if (
      !phone.current?.value ||
      !/^\d+$/.test(phone.current.value) ||
      phone.current.value.length < 8 ||
      phone.current.value.length > 10 ||
      phone.current.value.length === 9
    ) {
      setErr(2);
    } else if (address.current?.value == "") {
      setErr(3);
    } else {
      setErr(0);
    }
    console.log(err);
  };

  return (
    <div>
      <TextInput
        label={"Name"}
        placeholder={"Enter your name"}
        ref={name}
        err={err == 1 && true}
      />

      <TextInput
        label={"Phone"}
        placeholder={"Enter your Phone number"}
        ref={phone}
        err={err == 2 && true}
      />
      <TextInput
        label={"Address"}
        placeholder={"Enter your Address"}
        ref={address}
        err={err == 3 && true}
      />

      <div className="flex justify-center">
        <OrangeButton title={"Process"} onClick={() => handleProcess()} />
      </div>
    </div>
  );
}

export default UserDetails;
