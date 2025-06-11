import styles from './heading.module.css';

export function Heading() {
  const classes = `${styles.heading} ${styles.heading2}`;
  return <h1 className={classes}>teste</h1>;
}
