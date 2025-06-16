import type { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return <input className={styles.input} {...rest} />;
}
