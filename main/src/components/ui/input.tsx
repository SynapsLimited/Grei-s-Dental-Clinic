// src/components/ui/input.tsx
import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

export const Input = ({ type, name, placeholder, value, onChange, required }: InputProps) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />;
};
