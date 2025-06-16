import type { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: 'default' | 'inProgress';
  icon?: React.ReactNode;
};

export function Button({
  children,
  icon,
  variant = 'default',
  ...rest
}: ButtonProps) {
  const buttonClasses = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClasses} {...rest}>
      {icon && icon}
      {children && children}
    </button>
  );
}
