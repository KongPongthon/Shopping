import React from 'react';

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const CustomInput = ({
  label,
  value,
  placeholder,
  name,
  onChange,
}: InputProps) => {
  return (
    <label className='floating-label text-black'>
      <span>{label}</span>
      <input
        name={name}
        type='text'
        placeholder={placeholder}
        className='input input-md'
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default CustomInput;
