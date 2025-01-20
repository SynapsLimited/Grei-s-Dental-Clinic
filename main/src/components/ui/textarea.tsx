// src/components/ui/textarea.tsx
import React from "react";

type TextareaProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows: number;
  required?: boolean;
};

export const Textarea = ({ name, placeholder, value, onChange, rows, required }: TextareaProps) => {
  return (
    <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} rows={rows} required={required} />
  );
};