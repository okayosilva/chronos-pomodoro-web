import styles from './heading.module.css';

export function Heading({ children }: { children: React.ReactNode }) {
  const classes = `${styles.heading} ${styles.heading2}`;
  return <h1 className={classes}>{children}</h1>;
}
