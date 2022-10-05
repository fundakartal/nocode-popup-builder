import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset';
  onClick?: (e: any) => void;
  className?: string;
  id?: string;
}

const Button = ({ id, onClick, children, className, type }: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
