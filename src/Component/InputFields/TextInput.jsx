import React from "react";

const TextInput = React.forwardRef(({ label, placeholder, err }, ref) => {
  return (
    <div className="mb-6 w-full max-w-md">
      <label className="block text-base font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded-lg bg-slate-100 text-base border outline-none
          transition duration-300 ease-in-out
          focus:ring-4 focus:ring-orange-400
          ${err ? "border-red-500 focus:ring-red-400" : "border-gray-300"}`}
        placeholder={placeholder}
        ref={ref}
      />
      <p className="text-sm text-red-600 mt-1 min-h-[1rem] font-medium">
        {err && "Please enter a valid input"}
      </p>
    </div>
  );
});

export default TextInput;
