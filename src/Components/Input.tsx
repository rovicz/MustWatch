import React, { ReactNode } from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  icon: ReactNode;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setState, icon, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{icon}</label>
      <input
        id={label}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        name={label}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
