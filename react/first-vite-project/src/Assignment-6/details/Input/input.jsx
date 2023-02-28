import { useState } from "react";
import React from "react";

function Input({text, type, name, handleChange, formData }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={text}
        onChange={handleChange}
        value={formData}
        required
      />
    </>
  );
}

export default Input;
