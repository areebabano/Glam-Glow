import React from "react";
import { InputFieldProps } from "../app/types/types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  maxLength,
}) => {
  return (
    <div>
        <label htmlFor={name} className="block text-sm text-teal-900 font-bold mb-1">{label}</label>
        <input type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-700"
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  )
};

export default InputField;
