import React from "react";
import TextInput from "../../InputFields/TextInput";
import { useRef } from "react";
import OrangeButton from "../../Button/OrangeButton";

const UserDetail = () => {
    const name = useRef();
     const phone = useRef();
      const address = useRef();
      const handleProcess=()=>{
        console.log("Name:",name.current.value);
      }
  return (
    <div className="m-4">
      <TextInput label={"Name"} placeholder={"Enter your name"} ref={name} />
      <TextInput
        label={"Phone"}
        placeholder={"Enter your phone number"}
        ref={phone}
      />
      <TextInput
        label={"Address"}
        placeholder={"Enter your Address"}
        ref={address}
      />
      <div className="flex justify-center">
        <OrangeButton title={"Processed"} onClick={()=>handleProcess()}/>
      </div>
    </div>
  );
};

export default UserDetail;
