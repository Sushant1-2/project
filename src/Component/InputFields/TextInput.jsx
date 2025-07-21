import React from "react";

const TextInput = (label, placeholder, ref, err) => {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-800">
        {label}:
        <input
          className={` border w-full ${
            err ? "border-red-500" : "border-gray-300"
          }bg-slate-50 rounded-sm p-1 px-2`}
          placeholder={placeholder}
          ref={ref}
        />
        <div className="h-5 text-xs text-red-500 px-2">
          {err && " Please enter a valid input"}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
