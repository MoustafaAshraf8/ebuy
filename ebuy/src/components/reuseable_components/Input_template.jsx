import React from "react";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Input_template = ({ label, value, onChange, type, placeholder }) => {
  let icon =
    label.toLowerCase() == "email" ? <AlternateEmailIcon /> : <LockIcon />;
  return (
    <div class="input-group ms-1 me-1 mt-1 mb-3">
      <span class="input-group-text d-none d-md-inline w-25" id="basic-addon1">
        {label}
      </span>
      <span class="input-group-text d-inline d-md-none" id="basic-addon1">
        {icon}
      </span>
      <input
        value={value}
        onChange={onChange}
        type={type}
        class="form-control"
        placeholder={placeholder}
        aria-label="password"
        aria-describedby="basic-addon1"
        required
      />
    </div>
  );
};

export default Input_template;
