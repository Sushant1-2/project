import React, { useRef, useState } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";

function UserDetails() {
  const [err, setErr] = useState(0);
  const [success, setSuccess] = useState(false);
  const name = useRef("");
  const phone = useRef("");
  const address = useRef("");

  const handleProcess = () => {
    if (name.current?.value === "" || name.current?.value.length < 3) {
      setErr(1);
      setSuccess(false);
    } else if (
      !phone.current?.value ||
      !/^\d+$/.test(phone.current.value) ||
      phone.current.value.length < 8 ||
      phone.current.value.length > 10 ||
      phone.current.value.length === 9
    ) {
      setErr(2);
      setSuccess(false);
    } else if (address.current?.value === "") {
      setErr(3);
      setSuccess(false);
    } else {
      setErr(0);
      setSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

      // Clear inputs
      name.current.value = "";
      phone.current.value = "";
      address.current.value = "";
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-yellow-200 to-orange-300 p-6 rounded-xl shadow-lg">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
          User Details Form
        </h2>

        <TextInput
          label="Name"
          placeholder="Enter your name"
          ref={name}
          err={err === 1}
        />
        <TextInput
          label="Phone"
          placeholder="Enter your phone number"
          ref={phone}
          err={err === 2}
        />
        <TextInput
          label="Address"
          placeholder="Enter your address"
          ref={address}
          err={err === 3}
        />

        <div className="flex justify-center mt-8">
          <OrangeButton title="Process" onClick={handleProcess} />
        </div>

        {/* Success message */}
        <div
          className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-white font-semibold text-lg
  transition-all duration-500
  ${
    success
      ? "bg-green-500 opacity-100 scale-100"
      : "bg-green-500 opacity-0 scale-90 pointer-events-none"
  }`}
          role="alert"
        >
          Submitted Successfully!
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
