import styles from './styles.module.css';

export function CountDown() {
  return (
    <div className={styles.countDown}>
      <div className={styles.countDownContent}>
        <h2 className={styles.countDownTitle}>00:00</h2>
      </div>
    </div>
  );
}
