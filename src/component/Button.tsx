import React from "react";

interface ButtonProps {
  label: string;
  variant?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <button className={`btn btn-${variant} m-2`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
