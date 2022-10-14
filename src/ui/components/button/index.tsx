import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset';
  onClick?: (e: any) => void;
  className?: string;
  id?: string;
  style?: {};
}

const Button = ({
  id,
  onClick,
  children,
  className,
  type,
  style,
}: ButtonProps) => {
  return (
    <button
      style={style}
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
